"use strict";

var db = require('../database/connection');

var Base = require('./base');

function Roles(connection) {
  this.table = 'roles';
  Base.call(this, connection);
} //Extending the class and setting methods


Roles.prototype = Object.create(Base.prototype);
/**
 * Adding new user record
 */

Roles.prototype.add = function (params) {// console.log('inside add', this.connection)
};

module.exports = new Roles(db);