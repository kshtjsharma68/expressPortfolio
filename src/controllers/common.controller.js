const BaseController = require('./baseController');

class CommonController extends BaseController{
    constructor(...args) {
        super(...args);
        this.name = "Saving car"
    }

    async showPortfolio(req, res) {
        let { token } = req.params;console.log(this)
        res.render('common/portfolio');
    }
}

module.exports = new CommonController;