
const User = require('../models/User');
const catchAsync = require('../middleware/catchAsync');
const ErrorResponse = require('../utils/ErrorResponse');
const sendTokenResponse = require('../utils/sendTokenResponse');
const { authenticateToken } = require('../middleware/auth');

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
  const updatedUser = await User.findByIdAndUpdate(req.user.id, req.body, {
    new: true,
    runValidators: true
  });

  res.status(200).json({ success: true, data: updatedUser });
});