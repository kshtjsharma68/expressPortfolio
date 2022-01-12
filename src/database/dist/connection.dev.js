"use strict";

var mysql = require("mysql");

var config = require("../config/db.js");

var connection = mysql.createConnection({
  host: config.DB_HOST,
  user: config.DB_USER,
  password: config.DB_PSWD,
  database: config.DB_NAME,
  port: config.DB_PORT,
  multipleStatements: true
});

module.exports = function () {
  try {
    connection.connect(function (err) {
      if (err) {
        console.log(JSON.stringify(err));
      } else {
        console.log('Sucessfully connected to database');
      }
    }); // To do query

    connection.on('enqueue', function (sequence) {// console.log('sequence',sequence.sql)
    });
  } catch (err) {
    console.log("Unable to connect with the database with these configuration.Error: ".concat(err.message));
  }

  return connection;
}();