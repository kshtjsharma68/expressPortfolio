const router = require('express').Router();

const adminController = require('../controllers/admin.controller');

const developerController = require('../controllers/admin.developer.controller');

const parametersController = require('../controllers/admin.parameters.controller');

// Middleware for common routes
router.use((req, res, next) => {
    // let { user = {} } = req.session 
    // if(!(user && user.id)){
    //     return res.redirect('auth/login')
    // }
    // console.log('Middleware for logging admin request:' + JSON.stringify(req.body, null, 2));
    next();
})

router.get('/', adminController.index)

router.get('/change-password', adminController.changePassword)

router.get('/developers', developerController.index)

router.post('/add-role', parametersController.addRole)

router.get('/parameters', parametersController.index)

router.post('/remove-role', parametersController.removeRole)


module.exports = router;