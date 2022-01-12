"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var RolesSeeder = require('./roles');

var UsersSeeder = require('./users');

var Seeders =
/*#__PURE__*/
function () {
  function Seeders() {
    _classCallCheck(this, Seeders);
  }

  _createClass(Seeders, [{
    key: "up",

    /**
     * Run seeders on db
     */
    value: function up(connection) {
      return new Promise(function (resolve, reject) {
        var allSeeders = [RolesSeeder, UsersSeeder];

        try {
          allSeeders.forEach(function (seed, index) {
            connection.query("".concat(seed), function (error, result, field) {
              console.log('herer');

              if (error) {
                console.log("error in query queryIndex ".concat(index, " error =").concat(JSON.stringify(error, null, 2)));
              } else {
                console.log("".concat(Object.keys({
                  seed: seed
                })[0], " Seeder ran successfully."));
              }
            });

            if (index + 1 === allSeeders.length) {
              resolve();
            }
          });
        } catch (e) {
          console.log(e);
          reject(JSON.stringify(e, null, 2));
        }
      });
    }
  }]);

  return Seeders;
}();

module.exports = new Seeders();