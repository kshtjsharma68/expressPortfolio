"use strict";
exports.__esModule = true;
var express_1 = require("express");
var path_1 = require("path");
// Extracting
var app = express_1["default"]();
var port = process.env.PORT || 3000;
// Static files
app.use(express_1["default"].static('public'));
// Views
app.set("views", path_1.resolve('./src/views'));
app.set("view engine", 'pug');
app.get('/', function (req, res) {
    res.render("index");
});
app.listen(port, function () {
    console.log('Server is listening on port:' + port);
});
