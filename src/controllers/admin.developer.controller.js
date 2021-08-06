const { User, Developer } = require('../models')

class developer {
    index(req, res) {
        res.render('admin/developer')
    }

    async addDeveloper(req, res) {
        let form = req.body;
        console.log(form);
        var user = await User.add({first_name: 'kshitij', last_name: 'sharma', role_id: 2, email: 'kshtjsharma68@gmail.com', profile_image:'', password: 'password'}).then(r => r).catch(err => {});
        // Developer.add()
        console.log(user)
        res.send('ok')
    }
}

module.exports = new developer