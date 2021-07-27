"use strict";

var router = require('express').Router(); // Middleware for common routes


router.use(function (req, res, next) {
  // console.log('Middleware for logging request:' + JSON.stringify(req.body, null, 2));
  next();
});
router.get('/', function (req, res) {
  res.render('index');
});
module.exports = router;