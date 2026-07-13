const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User');

  passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID || 'placeholder_client_id',
    clientSecret: process.env.GOOGLE_CLIENT_SECRET || 'placeholder_client_secret',
    callbackURL: "/api/auth/google/callback",
    proxy: true
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      // Check if user already exists
      let user = await User.findOne({ email: profile.emails[0].value });

      if (user) {
        // Link googleId if not linked
        if (!user.googleId) {
          user.googleId = profile.id;
          await user.save();
        }
        return done(null, user);
      }

      // If not, create a new user
      user = await User.create({
        name: profile.displayName,
        email: profile.emails[0].value,
        googleId: profile.id,
        dashboardMetrics: {
          learningStreak: Math.floor(Math.random() * 30),
          dsaProgress: Math.floor(Math.random() * 500),
          dsaTotal: 1200,
          mockInterviews: Math.floor(Math.random() * 15),
          resumeScore: Math.floor(Math.random() * 40) + 60,
        }
      });
      
      done(null, user);
    } catch (error) {
      console.error(error);
      done(error, null);
    }
  }
));

module.exports = passport;
