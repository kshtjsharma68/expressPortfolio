const router = require('express').Router();
const multer = require('multer')
const storage   = multer.diskStorage({
        destination: function(req, file, cb) {
            cb(null, './public/uploads')
        },
        filename: function(req, file, cb) {
            cb(null, file.originalname)
        }
    })
const upload = multer({ storage: storage })

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
router.get('/developers/:id/edit', developerController.edit)
router.post('/developers', upload.single('avatar'), developerController.addDeveloper)
router.post('/developers/social/:id', developerController.addSocial)
router.put('/developers/social/:id', developerController.updateSocial)

router.get('/parameters', parametersController.index)

//Roles
router.post('/add-role', parametersController.addRole)
router.post('/remove-role', parametersController.removeRole)

//Skills
router.post('/add-skill', parametersController.addSkill)
router.post('/remove-skill', parametersController.removeSkill)


module.exports = router;