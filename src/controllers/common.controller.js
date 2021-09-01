const BaseController = require('./baseController');

class CommonController extends BaseController { 

    async showPortfolio(req, res) {
        let models = super.getModels();
        let { token } = req.params; 
        res.render('common/portfolio');
    }
}

module.exports = new CommonController; 