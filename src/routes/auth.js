const router = require('express').Router();

const authController = require('../controllers/auth.controller')

// Middleware for common routes
router.use((req, res, next) => {
    console.log('Middleware for logging auth request:' + JSON.stringify(req.body, null, 2));
    next();
})

router.get('/login', authController.index)

router.post('/login', authController.Login)

router.get('/register', authController.register)

module.exports = router;