class AdminController {

    constructor() {
        // console.log('inside admin controller')
    }

    index(req, res) {
       res.render('admin/index') 
    }

    changePassword(req, res) {
        res.render('admin/changePassword')
    }
}

module.exports = new AdminController;