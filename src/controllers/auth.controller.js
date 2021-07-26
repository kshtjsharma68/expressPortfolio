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
    Login(req, res) {
        let { email, password } = req.body;
    }
}

module.exports = new AuthController;