"use strict";

function Base(connection) {
  this.connection = connection;
}

Base.prototype.query = function (_ref) {
  var sql = _ref.sql,
      data = _ref.data;

  var _this = this;

  return new Promise(function (resolve, reject) {
    _this.connection.query("".concat(sql), function (error, results, fields) {
      if (error) {
        console.log('Error during query: ' + JSON.stringify({
          sql: sql,
          error: error
        }));
        reject(error);
      }

      resolve(results);
    });
  });
};

module.exports = Base;