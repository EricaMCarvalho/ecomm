const jwt = require('jsonwebtoken');

const sendTokenResponse = async (user, statusCode, res) => {
  const accessToken = jwt.sign({id: user.id}, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE
  });

  res.status(statusCode).json({ success: true, accessToken });
}

module.exports = sendTokenResponse;