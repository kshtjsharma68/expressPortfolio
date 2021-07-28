"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = require('../models'),
    User = _require.User;

var AuthController =
/*#__PURE__*/
function () {
  function AuthController() {
    _classCallCheck(this, AuthController);
  }
  /**
   * Get request for login page
   */


  _createClass(AuthController, [{
    key: "index",
    value: function index(req, res) {
      res.render('auth/login');
    }
    /**
     * Get request for register page
     */

  }, {
    key: "register",
    value: function register(req, res) {
      res.render('auth/register');
    }
    /**
     * Handle 
     */

  }, {
    key: "Login",
    value: function Login(req, res) {
      var _req$body, email, password, result;

      return regeneratorRuntime.async(function Login$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _req$body = req.body, email = _req$body.email, password = _req$body.password;
              _context.next = 3;
              return regeneratorRuntime.awrap(User.getUserWithEmail(email).then(function (r) {
                return r;
              }).then(function (res) {
                return result = res[0];
              })["catch"](function (err) {
                console.log(err.message);
              }));

            case 3:
              if (!result) res.redirect('back');
              req.session.user = {
                id: result.id
              }; // req.session.save(function(err) {
              //     console.log('session saved', req.session)
              // })

              res.redirect('/admin');

            case 6:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }]);

  return AuthController;
}();

module.exports = new AuthController();