"use strict";

var admin = require('./admin');

var common = require('./common');

var auth = require('./auth');

var router = require('express').Router();

router.get('/404', function (req, res) {
  res.render('errors/404');
});
router.get('/500', function (req, res) {
  res.render('errors/500');
}); //Routes for functionality

router.use('/admin', admin);
router.use('/auth', auth);
router.use(common); //If any unhandled route is sent
// router.use((req, res, next) => {
//     res.redirect('/500');
// })

module.exports = router;