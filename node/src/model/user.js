const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = new Schema({
  id: { type: String, required: true, max: 20 },
  email: { type: String, required: true, max: 100 },
  password: { type: String, required: true },
  username: { type: String, required: true, max: 100 },
  first_name: { type: String, required: true, max: 50 },
  last_name: { type: String, required: true, max: 50 },
  gender: { type: String, max: 100 },
});

module.exports = mongoose.model('User', User);
