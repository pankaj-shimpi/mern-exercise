const express = require('express');
const router = express.Router();
const passport = require('passport');
import googleStrategy from '../utilities/auth-strategies/google-strategy';

passport.use(googleStrategy);

router.get('/google',
  passport.authenticate('google', { session: false, scope: ['profile', 'email'] }));

router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.send('success!');
  });

module.exports = router;