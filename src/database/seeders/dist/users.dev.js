"use strict";

var bcrypt = require("bcrypt");
/**
 * Set password for admin user
 */


var AdminPassword = function AdminPassword() {
  return regeneratorRuntime.async(function AdminPassword$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(bcrypt.genSalt(10, function (err, salt) {
            console.log('first insinde', salt);
            bcrypt.hash('admin123', salt, function (err, hash) {
              console.log('hasg', hash);
              return hash;
            });
          }));

        case 2:
          return _context.abrupt("return", _context.sent);

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
};

var ADMIN_DATA = function ADMIN_DATA(_) {
  return "insert into users (id,role_id,first_name, last_name, email, profile_image, password) values (1,1,'Ad', 'min', 'admin@admin.com', '', '".concat(AdminPassword(), "') ");
};

module.exports = ADMIN_DATA;