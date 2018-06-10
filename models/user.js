const mongoose = require('mongoose');
const bycrpt = require('bcryptjs');
const config = require('../config/database');

//User Schema
const userSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const User = module.exports = mongoose.model('User', userSchema, 'users');

module.exports.getUserById = function (id, callback) {
  User.findById(id, callback);
}

module.exports.getUserByUserName = function (userName, callback) {
  const query = {
    userName: userName
  }
  User.findOne(query, callback);
}

module.exports.getUserByEmail = function (email, callback) {
  const query = {
    email: email
  }
  User.findOne(query, callback);
}


module.exports.addUser = function (newUser, callback) {
  bycrpt.genSalt(10, (err, salt) => {
    bycrpt.hash(newUser.password, salt, (err, hash) => {
      if (err) {
        throw err;
      }
      newUser.password = hash;
      newUser.save(callback);
    });
  });
}

module.exports.comparePassword = function (candidatePassword, hash, callback) {
  bycrpt.compare(candidatePassword, hash, (err, isMatch) => {
    if (err) throw err
    callback(null, isMatch);
  });
}