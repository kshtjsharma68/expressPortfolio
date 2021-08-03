const admin = require('./admin')
const common = require('./common')

const auth = require('./auth')

const router = require('express').Router();

router.use((req, res, next) => {
    res.locals.csrfToken = req.csrfToken()
    next()
})

router.get('/404', (req, res) => {
    res.render('errors/404')
})

router.get('/500', (req, res) => {
    res.render('errors/500')
})

//Routes for functionality

router.use('/admin', admin)

router.use('/auth', auth)

router.use(common)

//If any unhandled route is sent
// router.use((req, res, next) => {
//     res.redirect('/500');
// })

module.exports = router;