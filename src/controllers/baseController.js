const models = require('../models')

function BaseController(...args) {
    this.models = models;
}

module.exports = BaseController;