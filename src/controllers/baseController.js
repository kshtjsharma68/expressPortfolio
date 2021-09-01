const models = require('../models')

class BaseController  {
    constructor() {
        this.models = models;
    }

    getModels() {
        return "ccar"
    }
}

module.exports = BaseController;