const express = require('express');
const passport = require('passport');
const sendTokenResponse = require('../utils/sendTokenResponse');
const { authenticateToken } = require('../middleware/auth');
const { register, login, getProfile, updateProfile, updatePassword, forgotPassword, resetPassword } = require('../controllers/auth');

const router = express.Router();

/**
 * Route:       GET /api/auth/google
 * Description: Google OAuth
 * Access:      Public
 */
router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}))

router.get('/google/callback', passport.authenticate('google'), (req, res) => {
  sendTokenResponse(req.user, 200, res);
});

router.post('/register', register);
router.post('/login', login);
router.route('/profile').get(authenticateToken, getProfile).put(authenticateToken, updateProfile);
router.put('/updatepassword', authenticateToken, updatePassword);
router.post('/forgotpassword', forgotPassword);
router.put('/resetpassword/:resettoken', resetPassword);

module.exports = router;

