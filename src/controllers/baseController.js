const models = require('../models')

class BaseController  {
    constructor() {
        this.models = models;
    }

    getModels() {
        return models;
    }
}

module.exports = BaseController;