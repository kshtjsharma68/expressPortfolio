class AdminController {

    constructor() {
        console.log('inside admin controller')
    }

    index(req, res) {
       res.render('admin/index') 
    }
}

module.exports = new AdminController;