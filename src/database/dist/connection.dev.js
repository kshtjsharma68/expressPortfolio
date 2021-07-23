"use strict";

var _mysql = _interopRequireDefault(require("mysql"));

var _db = _interopRequireDefault(require("../config/db"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var connection = _mysql["default"].createConnection({
  host: _db["default"].DB_HOST,
  user: _db["default"].DB_USER,
  password: _db["default"].DB_PSWD,
  database: _db["default"].DB_NAME,
  port: _db["default"].DB_PORT
});

try {
  connection.connect(); //To do query

  connection.on('enqueue', function (sequence) {
    console.log(sequence.sql);
  });
} catch (err) {
  console.log("Unable to connect with the database with these configuration.Error: ".concat(err.message));
}

module.exports = connection;