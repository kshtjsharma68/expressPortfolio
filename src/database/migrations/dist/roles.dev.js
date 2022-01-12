"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Titles =
/*#__PURE__*/
function () {
  function Titles() {
    _classCallCheck(this, Titles);
  }

  _createClass(Titles, [{
    key: "up",

    /**
     * Run migration on call
     */
    value: function up(connection) {
      var ROLE_SQL;
      return regeneratorRuntime.async(function up$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              ROLE_SQL = "CREATE TABLE if not exists titles (\n            id TINYINT unsigned NOT NULL AUTO_INCREMENT,\n            name varchar(15) ,\n            PRIMARY KEY (id))";
              _context.next = 3;
              return regeneratorRuntime.awrap(new Promise(function (resolve, reject) {
                try {
                  var queries = [ROLE_SQL];
                  queries.forEach(function (sql, index) {
                    connection.query("".concat(sql), function (error, rows, fields) {
                      if (error) {
                        console.log("Error in query queryIndex ".concat(index, " error =").concat(JSON.stringify(error, null, 2)));
                      }

                      if (index + 1 === queries.length) {
                        resolve();
                      }
                    });
                  });
                } catch (e) {
                  console.log(e);
                  reject(JSON.stringify(e, null, 2));
                }
              }));

            case 3:
              return _context.abrupt("return", _context.sent);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }]);

  return Titles;
}();

module.exports = new Titles();