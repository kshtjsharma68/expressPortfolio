"use strict";

var db = require('../database/connection');

var Base = require('./base');

function User(connection) {
  this.table = 'users';
  Base.call(this, connection);
} //Extending the class and setting methods


User.prototype = Object.create(Base.prototype);
/**
 * Adding new user record
 */

User.prototype.add = function (params) {
  console.log('inside add', this.connection);
};
/**
 * Check if user exists with email and password
 */


User.prototype.getUserWithEmail = function () {
  var email = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var sql = "SELECT id, email, password from ".concat(this.table, " WHERE email = ") + this.connection.escape(email);
  return this.query({
    sql: sql
  });
};

module.exports = new User(db);