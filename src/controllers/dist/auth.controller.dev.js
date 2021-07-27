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
              result = User.checkUserWithEmailAndPassword({
                email: email,
                password: password
              });
              if (result) console.log(result); // res.redirect('/admin')
              // res.redirect('/auth/login')

            case 3:
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