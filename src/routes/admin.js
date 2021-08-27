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
router.post('/developers/social/:id/update/:socialId', developerController.updateSocial)
router.post('/developers/social/:id/skills', developerController.addSkillsToDevelopers)
router.post('/developers/basic/:id', developerController.addbasicInfo);
router.post('/developers/projects/:id', upload.array('project_image',5), developerController.addProject);
router.get('/developers/generateLink', developerController.generatePortfolioLink);


router.get('/parameters', parametersController.index);
router.get('/skills', parametersController.skills);

//Roles
router.post('/add-role', parametersController.addRole)
router.post('/remove-role', parametersController.removeRole)

//Skills
router.post('/add-skill', parametersController.addSkill)
router.post('/remove-skill', parametersController.removeSkill)


module.exports = router;