"use strict";

var admin = require('./admin');

var common = require('./common');

var router = require('express').Router();

router.use('/admin', admin);
router.use(common);
module.exports = router;