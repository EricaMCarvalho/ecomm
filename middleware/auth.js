const jwt = require('jsonwebtoken');

const ErrorResponse = require('../utils/ErrorResponse');
const catchAsync = require('./catchAsync');
const User = require('../models/User');

exports.authenticateToken = catchAsync(async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.startsWith('Bearer') && req.headers.authorization.split(' ')[1];

  if (!token) {
    return next(new ErrorResponse('Not authorized access to this route', 401));
  }

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_JWT_SECRET);
    req.user = await User.findById(decoded.id);

    next();
  } catch (error) {
    return next(new ErrorResponse('Not authorized access to this route', 403));
  }
})

exports.isAdmin = catchAsync(async (req, res, next) => {
  console.log(req.user);
  if (req.user.isAdmin) {
    return next();
  }

  return next(new ErrorResponse('Not authorized access to this route', 403));
})