"use strict";

var express = require("express");

var _require = require("path"),
    resolve = _require.resolve;

var bodyParser = require('body-parser');

var session = require('express-session');

var routes = require("./routes"); // Extracting


var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
var port = process.env.PORT || 3000; // Static files

app.use(express["static"]('public'));
app.use(routes); // Views

app.set("views", resolve('./src/views'));
app.set("view engine", 'pug');
app.use(session({
  secret: 'cookie_secret',
  resave: true,
  saveUninitialized: true
}));
app.listen(port, function () {
  console.log('Server is listening on port:' + port);
});