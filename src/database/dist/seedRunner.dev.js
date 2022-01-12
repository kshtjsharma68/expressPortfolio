"use strict";

require("dotenv").config();

var dbConnection = require("./connection");

var seeder = require("../database/seeders"); // Group of seeds


var Seeders = [seeder];
/**
* TO populate records
*/

var runSeeders = function runSeeders() {
  return regeneratorRuntime.async(function runSeeders$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          console.log('Runnig seeders');
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(Promise.all(Seeders.map(function _callee(seed) {
            return regeneratorRuntime.async(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return regeneratorRuntime.awrap(seed.up(dbConnection));

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            });
          }))["catch"](function (e) {
            console.log('Seeders Error: ' + JSON.stringify(e, null, 2));
          }));

        case 4:
          dbConnection.end();
          _context2.next = 10;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](1);
          console.log('Seeders error: ' + JSON.stringify(_context2.t0, null, 2));

        case 10:
          process.exit(0);

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 7]]);
};

runSeeders();