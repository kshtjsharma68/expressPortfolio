"use strict";

var router = require('express').Router();

var authController = require('../controllers/auth.controller'); // Middleware for common routes


router.use(function (req, res, next) {
  // console.log(req.session)
  // console.log('Middleware for logging auth request:' + JSON.stringify(req.body, null, 2));
  next();
});
router.get('/login', authController.index);
router.post('/login', authController.Login);
router.get('/register', authController.register);
module.exports = router;