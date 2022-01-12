"use strict";

var db = require('../database/connection');

var Base = require('./base');

function Titles(connection) {
  this.table = 'titles';
  Base.call(this, connection);
} //Extending the class and setting methods


Titles.prototype = Object.create(Base.prototype);
/**
 * Get all titles
 */

Titles.prototype.all = function () {
  var sql = "SELECT * FROM ".concat(this.table);
  return this.query({
    sql: sql
  });
};
/**
 * Adding new title record
 */


Titles.prototype.add = function (_ref) {
  var _ref$name = _ref.name,
      name = _ref$name === void 0 ? "" : _ref$name;
  var sql = "INSERT INTO ".concat(this.table, " (name) VALUES ('").concat(name, "')");
  return this.query({
    sql: sql
  });
};

module.exports = new Titles(db);