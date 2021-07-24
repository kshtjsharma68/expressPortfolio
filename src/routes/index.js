const admin = require('./admin')
const common = require('./common')

const router = require('express').Router();

router.use('/admin', admin)
router.use(common)

module.exports = router;