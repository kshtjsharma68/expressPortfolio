"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = require('../models'),
    Title = _require.Title;

var Parameters =
/*#__PURE__*/
function () {
  function Parameters() {
    _classCallCheck(this, Parameters);

    console.log('inside paramters');
  }
  /**
   * 
   * @param {req} req 
   * @param {res} res 
   */


  _createClass(Parameters, [{
    key: "index",
    value: function index(req, res) {
      var titles;
      return regeneratorRuntime.async(function index$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(Title.all().then(function (r) {
                return r;
              })["catch"](function (err) {
                return [];
              }));

            case 2:
              titles = _context.sent;
              res.render('admin/parameters', {
                titles: titles
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      });
    }
    /**
     * Adding roles
     * @param {*} req 
     * @param {*} res 
     */

  }, {
    key: "addRole",
    value: function addRole(req, res) {
      return regeneratorRuntime.async(function addRole$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return regeneratorRuntime.awrap(Title.add(req.body).then(function (result) {
                return console.log(result);
              })["catch"](function (err) {
                return console.log('error', err.message);
              }));

            case 2:
              res.redirect('back');

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }]);

  return Parameters;
}();

module.exports = new Parameters();