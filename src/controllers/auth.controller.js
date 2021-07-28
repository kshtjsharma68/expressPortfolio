const {
    User
} = require('../models')

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
        let {
            email,
            password
        } = req.body;
        var result;
        await User.getUserWithEmail(email)
            .then(r => r)
            .then(res => result = res[0])
            .catch(err => {
                console.log(err.message)
            })
        if (!result) res.redirect('back')
        req.session.user = {
            id: result.id
        }

        // req.session.save(function(err) {
        //     console.log('session saved', req.session)
        // })
        res.redirect('/admin')
    }
}

module.exports = new AuthController;