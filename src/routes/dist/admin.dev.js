"use strict";

var router = require('express').Router();

var adminController = require('../controllers/admin.controller'); // Middleware for common routes


router.use(function (req, res, next) {
  var _req$session$user = req.session.user,
      user = _req$session$user === void 0 ? {} : _req$session$user;

  if (!(user && user.id)) {
    res.redirect('back');
  } // console.log('Middleware for logging admin request:' + JSON.stringify(req.body, null, 2));


  next();
});
router.get('/', adminController.index);
module.exports = router;