const BaseController = require('./baseController');

function Common(...args) {
    this.controller = 'nasty js';
    BaseController.call(this, ...args);    
}

Common.prototype = Object.create(BaseController.prototype);
// Common.prototype.constructor = BaseController;

Common.prototype.showPortfolio = async function(req, res) { console.log('inside the portfolio')
    let { token } = req.params;  console.log(this,this.controller)
    res.render('common/portfolio');
}

module.exports = new Common();