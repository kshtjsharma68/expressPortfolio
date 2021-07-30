"use strict";

var router = require('express').Router();

var adminController = require('../controllers/admin.controller');

var developerController = require('../controllers/admin.developer.controller'); // Middleware for common routes


router.use(function (req, res, next) {
  // let { user = {} } = req.session 
  // if(!(user && user.id)){
  //     return res.redirect('auth/login')
  // }
  // console.log('Middleware for logging admin request:' + JSON.stringify(req.body, null, 2));
  next();
});
router.get('/', adminController.index);
router.get('/change-password', adminController.changePassword);
router.get('/parameters', adminController.parameters);
router.get('/developers', developerController.index);
module.exports = router;