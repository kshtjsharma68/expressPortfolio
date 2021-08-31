const models = require('../models')

class BaseController  {
    constructor() {
        this.models = models;
    }

    name() {
        return "base controller";
    }
}

module.exports = BaseController;