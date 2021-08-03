const {Title, Skill} = require('../models')

class Parameters {
    constructor() {
        console.log('inside paramters')
    }

    /**
     * 
     * @param {req} req 
     * @param {res} res 
     */
    async index(req, res) {
        var titles = await Title.all().then(r => r).catch(err => [])

        var skills = await Skill.all().then(r => r).catch(err => [])
        
        res.render('admin/parameters', {titles, skills})
    }

    /**
     * Adding roles
     * @param {*} req 
     * @param {*} res 
     */
    async addRole(req, res) {
        await Title.add(req.body)
                    .then(result => result)
                    .catch(err => console.log('error',err.message))
        res.redirect('back')
    }

    /**
     * Remove role
     * 
     */
    async removeRole(req, res) {
        let { id } = req.body
        await Title.removeById(id)
        let titles = await Title.all()
                                .then(r => r)
                                .catch(err => [])
        res.status(200).json({'message': 'Well done', 'data': titles})
    }

    /**
     * Adding skills
     * @param {*} req 
     * @param {*} res 
     */
    async addSkill(req, res) {
        await Skill.add(req.body)
                    .then(result => result)
                    .catch(err => console.log('error',err.message))
        res.redirect('back')
    }

    /**
     * Remove Skill
     * 
     */
    async removeSkill(req, res) {
        let { id } = req.body
        await Skill.removeById(id)
        let skills = await Skill.all()
                                .then(r => r)
                                .catch(err => [])
        res.status(200).json({'message': 'Well done', data: skills})
    }
}

module.exports = new Parameters()