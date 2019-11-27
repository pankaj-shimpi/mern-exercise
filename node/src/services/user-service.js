const User = require('../model/user');
const shortid = require('shortid');

class CommonService {
  constructor() { }

  getUsers() {
    return new Promise((res, rej) => {
      User.find({}, (err, data) => {
        let result = data.map(item => {
          item = item._doc;
          delete item.__v;
          delete item._id;
          return item;
        });
        res(result);
      });
    });
  }

  getUser(id) {
    return new Promise((res, rej) => {
      User.findOne({ id }, (err, data) => {
        data = data._doc;
        delete data.__v;
        delete data._id;
        res(data);
      })
    });
  }

  createUser(userDetails) {
    return new Promise((res, rej) => {
      let user = new User(userDetails);
      user.save((err, data) => {
        res(data);
      });
    });
  }
}

module.exports = new CommonService();