const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User');

const passportConfig = (app) => {

  app.use(passport.initialize());

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    done(null, user);
  });

  passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/api/auth/google/callback'
  }, async (accessToken, refreshToken, profile, done) => {
    try {
      let user = await User.findOne({googleId: profile.id});

      if (!user) {
        user = await User.create({
          givenName: profile.name.givenName,
          surname: profile.name.familyName,
          email: profile.emails[0].value,
          googleId: profile.id
        });
      }

      done(null, user);
    } catch (error) {
      done(error);
    }
  }));
}

module.exports = passportConfig;