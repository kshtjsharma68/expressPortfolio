const { User } = require('../models')

class AuthController {

    constructor() {

    }

    /**
     * Get request for login page
     */
    index(req, res) {
        res.render('auth/login')
    }

    /**
     * Get request for register page
     */
    register(req, res) {
        res.render('auth/register')
    }

    /**
     * Handle 
     */
    async Login(req, res) {
        let { email, password } = req.body;
        let result = User.checkUserWithEmailAndPassword({email, password})
        if(result) 
        console.log(result)
        // res.redirect('/admin')
        // res.redirect('/auth/login')
    }
}

module.exports = new AuthController;