const router = require('express').Router();

const adminController = require('../controllers/admin.controller');

// Middleware for common routes
router.use((req, res, next) => {
    // console.log('Middleware for logging admin request:' + JSON.stringify(req.body, null, 2));
    next();
})

router.get('/', adminController.index)


module.exports = router;