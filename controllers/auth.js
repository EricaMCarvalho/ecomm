const crypto = require('crypto');
const User = require('../models/User');
const catchAsync = require('../middleware/catchAsync');
const ErrorResponse = require('../utils/ErrorResponse');
const sendTokenResponse = require('../utils/sendTokenResponse');
const sendEmail = require('../utils/sendEmail');

/**
 * Route:       POST /api/auth/register
 * Description: Register a new user
 * Access:      Public
 */
exports.register = catchAsync(async (req, res, next) => {
  const { givenName, surname, email, password } = req.body;

  if (!password) {
    return next(new ErrorResponse('Please add a password'), 400);
  }

  if (password.length < 8) {
    return next(new ErrorResponse('Password must be longer than 8 characters'));
  }

  const user = await User.create({givenName, surname, email, password});

  sendTokenResponse(user, 200, res);
})

/**
 * Route:       POST /api/auth/login
 * Description: Login user
 * Access:      Public
 */
exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next('Please provide an email and password', 400);
  }

  const user = await User.findOne({ email }).select('+password');

  if (!user) {
    return next(new ErrorResponse('Invalid credentials', 401));
  }

  const isMatch = await user.isValidPassword(password);

  if (!isMatch) {
    return next(new ErrorResponse('Invalid credentials', 401));
  }

  sendTokenResponse(user, 200, res);
})

/**
 * Route:       GET /api/auth/profile
 * Description: Get logged in user info
 * Access:      Private
 */
exports.getProfile = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.user.id);

  res.status(200).json({ success: true, data: user });
});

/**
 * Route:       PUT /api/auth/profile
 * Description: Update logged in user
 * Access:      Private
 */
exports.updateProfile = catchAsync(async (req, res, next) => {
  const fieldsToUpdate = {
    givenName: req.body.givenName,
    surname: req.body.surname,
    email: req.body.email,
  };

  console.log(fieldsToUpdate);

  const updatedUser = await User.findByIdAndUpdate(req.user.id, fieldsToUpdate, {
    new: true,
    runValidators: true
  });

  res.status(200).json({ success: true, data: updatedUser });
});

/**
 * Route:       PUT /api/auth/updatepassword
 * Description: Update Password
 * Access:      Private
 */
 exports.updatePassword = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.user.id).select('+password');

  if (!req.body.newPassword) {
    return next(new ErrorResponse('Please add a new password', 400));
  }

  const isMatch = await user.isValidPassword(req.body.currentPassword);

  if (!isMatch) {
    return next(new ErrorResponse('Password is incorrect', 400));
  }

  user.password = req.body.newPassword;

  await user.save();

  sendTokenResponse(user, 200, res);
});

/**
 * Route:       POST /api/auth/forgotpassword
 * Description: Forgot Password
 * Access:      Public
 */
exports.forgotPassword = catchAsync(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return next(new ErrorResponse('No user found with that email', 404));
  }

  const resetToken = user.getResetPasswordToken();

  await user.save({ validateBeforeSave: false });

  const resetUrl = `${req.protocol}://${req.get('host')}/api/auth/resetpassword/${resetToken}`;

  // TODO: Fix message/html
  const message = 'Click on this link to reset password'
  const html = `<a href=${resetUrl}>Reset password</a>`

  try {
    await sendEmail({
      email: user.email,
      subject: 'Password reset token',
      message,
      html
    })

    return res.status(200).json({ success: true, data: 'Email sent' });
  } catch (error) {
    console.log(error);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save({ validateBeforeSave: false })

    return next(new ErrorResponse('Email could not be sent', 500));
  } 
});

/**
 * Route:       PUT /api/auth/resetpassword/:resettoken
 * Description: Reset Password
 * Access:      Public
 */
exports.resetPassword = catchAsync(async (req, res, next) => {
  const resetPasswordToken = crypto.createHash('sha256').update(req.params.resettoken).digest('hex');

  const user = await User.findOne({ resetPasswordToken, resetPasswordExpire: { $gt: Date.now() }});

  if (!user) {
    return next(new ErrorResponse('Invalid token', 400));
  }

  user.password = req.body.newPassword;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  await user.save();

  sendTokenResponse(user, 200, res);
});