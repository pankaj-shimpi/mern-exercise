const mongoose = require('mongoose');
const options = {
  autoIndex: false, // Don't build indexes
  reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0,
  useNewUrlParser: true,
  connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  useUnifiedTopology: true,
};
let _db = null;


function connect() {
  return new Promise((res, rej) => {
    const uri = `mongodb://localhost:27017/myapp`;
    mongoose.connect(
      uri,
      options,
      (err, connection) => {
        try {
          _db = connection.db;
          res();
        } catch (err) {
          rej(err);
        }
      }
    );
  });
}

function dbInstance() {
  return _db;
}

function find(_collection, _query, options = {}, cb) {
  return new Promise((res, rej) => {
    _db
      .collection(_collection)
      .find(_query, options)
      .toArray((err, result) => {
        if (err) {
          rej(err);
        } else {
          res(result);
        }
      });
  });
}

function findOne(_collection, _query, options = {}) {
  return new Promise((res, rej) => {
    _db.collection(_collection).findOne(_query, options, (err, result) => {
      if (err) {
        rej(err);
      } else {
        res(result);
      }
    });
  });
}

function count(_collection, _query, cb) {
  _db.collection(_collection).count(_query, (err, result) => {
    cb(err, result);
  });
}

module.exports = {
  connect,
  dbInstance,
  find,
  findOne,
  count,
  mongoose,
};