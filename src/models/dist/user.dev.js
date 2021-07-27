"use strict";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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


User.prototype.checkUserWithEmailAndPassword = function _callee(_ref) {
  var _ref$email, email, _ref$password, password, rest, sql, result;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _ref$email = _ref.email, email = _ref$email === void 0 ? '' : _ref$email, _ref$password = _ref.password, password = _ref$password === void 0 ? '' : _ref$password, rest = _objectWithoutProperties(_ref, ["email", "password"]);
          sql = "SELECT email, password from ".concat(this.table, " WHERE email = ") + this.connection.escape(email);
          _context.next = 4;
          return regeneratorRuntime.awrap(this.query({
            sql: sql
          }));

        case 4:
          result = _context.sent;
          return _context.abrupt("return", result.then(function (res) {
            if (res.length) return true;
            throw Error('Not valid');
          })["catch"](function (e) {
            console.log(e.message);
            return false;
          }));

        case 6:
        case "end":
          return _context.stop();
      }
    }
  }, null, this);
};

module.exports = new User(db);