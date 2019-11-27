const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const db = require('./dao');
const passport = require('passport');

const app = express();

db.connect().then(() => {
  const indexRouter = require('./routes');

  /* app.use(cors()); */
  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(helmet());
  app.use(express.json({ limit: '50mb' }));
  app.use(express.urlencoded({ extended: false, limit: '50mb' }));

  passport.serializeUser((user, cb) => {
    cb(null, user);
  });

  passport.deserializeUser((obj, cb) => {
    cb(null, obj);
  });

  app.use('/api', indexRouter);
  app.listen(4001, () => console.log(`Application running on port:4001`));
}).catch(err => {
  console.log(`Failed to run server. Error: ${JSON.stringify(err)}`)
})