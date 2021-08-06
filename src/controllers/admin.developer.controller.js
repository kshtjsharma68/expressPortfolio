const { User, Developer } = require('../models')

class developer {
    index(req, res) {
        res.render('admin/developer')
    }

    async addDeveloper(req, res) {
        let {first_name, last_name, email, dob, website, membertype } = req.body
        let file = req.file;
        let payload = {first_name, last_name, role_id: 2, email, profile_image: file.filename, password: 'password'};
        //Save user
        var user = await User.add(payload)

        user
        .then(res => {
                console.log('response', res);
                let payload2 = {user_id : res.insertI, dob, website, freelancer: membertype == 0 }
                Developer.add(payload2).then(r => r)
            res.redirect('back')
        })
        .catch(error=> {
            res.status(400).send({ error: error.message })
            res.redirect('/404')
        })
    }
}

module.exports = new developer