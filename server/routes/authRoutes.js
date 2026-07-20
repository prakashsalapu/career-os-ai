const express = require('express');
const router = express.Router();
const passport = require('passport');
const { 
  registerUser, 
  loginUser, 
  getMe, 
  googleCallback,
  forgotPassword,
  verifyOTP,
  resetPassword,
  verifyEmail 
} = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:5173';

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/me', protect, getMe);

router.post('/forgotpassword', forgotPassword);
router.post("/verify-otp", verifyOTP);
router.post('/resetpassword', resetPassword);
router.get('/verifyemail/:verifytoken', verifyEmail);

// Google OAuth Routes
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/google/callback', passport.authenticate('google', { session: false, failureRedirect: `${CLIENT_URL}/login` }), googleCallback);

module.exports = router;
