var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'yazid.belhajsalem@gmail.com',
    pass: 'Samiahedi123'
  }
});

var mailOptions = {
  from: 'yazid.belhajsalem@gmail.com',
  to: 'nadhemlaabidi@hotmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});