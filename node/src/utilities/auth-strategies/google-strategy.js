const GoogleStrategy = require('passport-google-oauth20').Strategy;
export default new GoogleStrategy({
  clientID: '770137996790-bq680vihbngr1ic7o28g6ruvo5ljfark.apps.googleusercontent.com',
  clientSecret: '-Vo0-qMr7OcszDFyWc_n3YcM',
  callbackURL: "http://localhost:4001/api/auth/google/callback"
},
  function (accessToken, refreshToken, profile, cb) {
    return cb(null, profile);
  }
);