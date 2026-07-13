const User = require('../models/User');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const sendEmail = require('../utils/sendEmail');

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || 'fallback_secret', {
    expiresIn: '30d',
  });
};

const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const name = `${firstName} ${lastName}`;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = await User.create({
      name,
      email,
      password,
      dashboardMetrics: {
        learningStreak: 1,
        dsaProgress: 0,
        dsaTotal: 1200,
        mockInterviews: 0,
        resumeScore: 50,
      }
    });

    if (user) {
      // Send verification email
      const verificationToken = user.getEmailVerificationToken();
      await user.save({ validateBeforeSave: false });

      const verifyUrl = `${req.protocol}://${req.get('host')}/api/auth/verifyemail/${verificationToken}`;
      const message = `Please verify your email by clicking on the link below:\n\n${verifyUrl}`;

      try {
        await sendEmail({
          email: user.email,
          subject: 'Email Verification',
          message,
        });
      } catch (err) {
        console.error(err);
      }

      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isEmailVerified: user.isEmailVerified,
        token: generateToken(user._id),
      });
    } else {
      res.status(400).json({ message: 'Invalid user data' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isEmailVerified: user.isEmailVerified,
        token: generateToken(user._id),
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Forgot Password
const forgotPassword = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json({ message: 'There is no user with that email' });
    }

    const resetToken = user.getResetPasswordToken();
    await user.save({ validateBeforeSave: false });

    // Assuming client runs on 5173
    const resetUrl = `${process.env.CLIENT_URL || 'http://localhost:5173'}/reset-password/${resetToken}`;
    const message = `You are receiving this email because you (or someone else) has requested the reset of a password. Please make a PUT request to: \n\n ${resetUrl}`;

    try {
      await sendEmail({
        email: user.email,
        subject: 'Password reset token',
        message,
      });

      res.status(200).json({ message: 'Email sent' });
    } catch (err) {
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;
      await user.save({ validateBeforeSave: false });
      return res.status(500).json({ message: 'Email could not be sent' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Reset Password
const resetPassword = async (req, res) => {
  try {
    const resetPasswordToken = crypto.createHash('sha256').update(req.params.resettoken).digest('hex');
    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() }
    });

    if (!user) {
      return res.status(400).json({ message: 'Invalid token' });
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Verify Email
const verifyEmail = async (req, res) => {
  try {
    const emailVerificationToken = crypto.createHash('sha256').update(req.params.verifytoken).digest('hex');
    const user = await User.findOne({ emailVerificationToken });

    if (!user) {
      return res.status(400).json({ message: 'Invalid token' });
    }

    user.isEmailVerified = true;
    user.emailVerificationToken = undefined;
    await user.save();

    res.redirect(`${process.env.CLIENT_URL || 'http://localhost:5173'}/dashboard`);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const googleCallback = (req, res) => {
  const token = generateToken(req.user._id);
  res.redirect(`${process.env.CLIENT_URL || 'http://localhost:5173'}/dashboard?token=${token}`);
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
  googleCallback,
  forgotPassword,
  resetPassword,
  verifyEmail
};
