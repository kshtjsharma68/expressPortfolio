class developer {
    index(req, res) {
        res.render('admin/developer')
    }

    addDeveloper(req, res) {
        let form = req.body;
        console.log(form);
        res.send('ok')
    }
}

module.exports = new developer