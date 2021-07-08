const jwt = require('jsonwebtoken');

const sendTokenResponse = async (user, statusCode, res) => {
  const accessToken = jwt.sign({id: user.id}, process.env.ACCESS_JWT_SECRET, {
    expiresIn: '30d'
  });

  res.status(statusCode).json({ success: true, accessToken });
}

module.exports = sendTokenResponse;