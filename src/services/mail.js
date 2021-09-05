const nodemailer = require('nodemailer');
const { mail } = require('../config/app');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: mail.user,
      pass: mail.pass
    }
  });

  module.exports = {
      sendEmail : function ({ email, title, subject, message }) {
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
        }
  }