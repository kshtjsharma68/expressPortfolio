class Common {
    constructor() {

    }

    async showPortfolio(req, res) {
        console.log(req.params)
    }
}

module.exports = new Common;