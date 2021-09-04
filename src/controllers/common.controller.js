const BaseController = require('./baseController');
const nodemailer = require('nodemailer');

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
        let { email, name, subject, message } = req.body;
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'kshtjsharma68@gmail.com',
              pass: 'zycnysltbgkhldcg'
            }
          });
          
          var mailOptions = {
            from: email,
            to: 'kshtjsharma68@gmail.com',
            subject: subject,
            text: message
          };
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          }); 

          res.status(200).json({'status': 200, 'msg': 'OK'})
    }
}

module.exports = new CommonController; 

