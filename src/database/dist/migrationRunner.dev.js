"use strict";

require("dotenv").config();

var dbConnection = require("./connection.js");

var baseMigrations = require("./migrations/all.js");

var Roles = require("./migrations/roles.js"); // Group of migrations


var Migrations = [baseMigrations, Roles];
/**
 * TO create table and run migrations
 */

var runMigrations = function runMigrations() {
  return regeneratorRuntime.async(function runMigrations$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          console.log('Runnig migrations');
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(Promise.all(Migrations.map(function _callee(migration) {
            return regeneratorRuntime.async(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return regeneratorRuntime.awrap(migration.up(dbConnection));

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            });
          }))["catch"](function (e) {
            console.log('Migration Error: ' + JSON.stringify(e, null, 2));
          }));

        case 4:
          dbConnection.end();
          _context2.next = 10;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](1);
          console.log('Migration error: ' + JSON.stringify(_context2.t0, null, 2));

        case 10:
          process.exit(0);

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 7]]);
};

var args = process.argv;

if (args.indexOf('up') !== -1) {
  runMigrations();
}