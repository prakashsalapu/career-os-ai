const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  resetPasswordOTP: {
  type: String,
},

resetPasswordOTPExpire: {
  type: Date,
},
  googleId: {
    type: String,
  },
  // Dashboard mock data fields to make it dynamic
  dashboardMetrics: {
    learningStreak: { type: Number, default: 0 },
    dsaProgress: { type: Number, default: 0 },
    dsaTotal: { type: Number, default: 1200 },
    mockInterviews: { type: Number, default: 0 },
    resumeScore: { type: Number, default: 0 },
  },
  isEmailVerified: {
    type: Boolean,
    default: false,
  },
  emailVerificationToken: String,
  resetPasswordOTP: String,
  resetPasswordOTPExpire: Date,
}, { timestamps: true });

userSchema.pre('save', async function() {
  if (!this.isModified('password')) {
    return;
  }
  if (this.password) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
});

userSchema.methods.matchPassword = async function(enteredPassword) {
  if (!this.password) return false;
  return await bcrypt.compare(enteredPassword, this.password);
};

// Generate and hash password token
const crypto = require('crypto');
userSchema.methods.getResetPasswordToken = function() {
  const resetToken = crypto.randomBytes(20).toString('hex');
  this.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');
  this.resetPasswordExpire = Date.now() + 10 * 60 * 1000; // 10 mins
  return resetToken;
};

userSchema.methods.getEmailVerificationToken = function() {
  const verificationToken = crypto.randomBytes(20).toString('hex');
  this.emailVerificationToken = crypto.createHash('sha256').update(verificationToken).digest('hex');
  return verificationToken;
};

const User = mongoose.model('User', userSchema);
module.exports = User;
