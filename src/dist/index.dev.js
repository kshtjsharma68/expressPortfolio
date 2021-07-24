"use strict";

var express = require("express");

var _require = require("path"),
    resolve = _require.resolve;

var routes = require("./routes"); // Extracting


var app = express(); // to parse json data from request object

app.use(express.json());
var port = process.env.PORT || 3000; // Static files

app.use(express["static"]('public'));
app.use(routes); // Views

app.set("views", resolve('./src/views'));
app.set("view engine", 'pug');
app.listen(port, function () {
  console.log('Server is listening on port:' + port);
});