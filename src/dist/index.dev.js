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
  extended: true
}));
var port = process.env.PORT || 3000; // Static files

app.use(express["static"]('public'));
var MemoryStore = session.MemoryStore; //Setting session

app.use(session({
  secret: 'cookie_secret',
  resave: true,
  store: new MemoryStore(),
  saveUninitialized: true,
  cookie: {
    secure: false
  },
  maxAge: 3600
})); //Routes

app.use(routes); // Views

app.set("views", resolve('./src/views'));
app.set("view engine", 'pug');
app.listen(port, function () {
  console.log('Server is listening on port:' + port);
});