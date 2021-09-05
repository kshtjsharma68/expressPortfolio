const BaseController = require('./baseController');
const { sendEmail } = require('../services/mail');

class CommonController extends BaseController { 
    constructor() {
        super();
    }

    async showPortfolio(req, res) {
        let developer = {};
        let { 
            User,
            Developer,
            Social,
            Address,
            Title,
            devSkills,
            devBasic,
            devProjects,
            Skill
         } = super.getModels(); 
        let users =  await User.getUserByToken(req.params.token); 
        if (!users || !users.length) {
            res.redirect('/404')
        }
        developer.user = users[0];
        let id = developer.user.id;
        let data = await Promise.all([ Developer.getByUserId(id), Social.getByUserId(id),Address.getByUserId(id), Title.getByUserId(id), devSkills.getByUserId(id), devBasic.getByUserId(id), devProjects.getByUserId(id), Skill.all() ]);
        console.log('data',data)
        res.render('common/portfolio', {developer});
    }

    async showProject(req, res) {
        res.status(200);
        res.render('common/project')
    }

    sendEmail(req, res) { 
          sendEmail(req.body);
          res.status(200).json({'status': 200, 'msg': 'OK'})
    }
}

module.exports = new CommonController; 

