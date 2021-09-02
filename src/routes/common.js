const router = require('express').Router();

//Controllers
const commonController = require('../controllers/common.controller');

// Middleware for common routes
router.use((req, res, next) => {
    // console.log('Middleware for logging request:' + JSON.stringify(req.body, null, 2));
    next();
})

router.get('/', function(req, res){
        res.render('index')
});

router.get('/project', commonController.showProject);
router.get('/portfolio/:token', commonController.showPortfolio);

module.exports = router;