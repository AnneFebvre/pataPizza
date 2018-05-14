var express = require('express');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon')
var path = require('path')

var app = express();
var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'websitedevperso@gmail.com',
    pass: 'AnneSite'
  }
});

app.use(express.static('public'))


app.use(favicon(path.join(__dirname + '/public/img/favicon.png')));

app.use(bodyParser.urlencoded({ extended: true })) 


 app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'))
 });
 
 app.post("/send", function(req, res) { 

	 req.body.name
   var mailOptions = {
    from: 'websitedevperso@gmail.com',
    to: 'websitedevperso@gmail.com',
    subject: 'Formulaire de contact La patapizza',
    html:'<p>tetuyrt</p>'
    //text: 'Nom : '+req.body.name+'<br>Tel :'+req.body.phone+'<br>Sujet :'+req.body.Commentaire
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

  });
 
  
  
app.listen(8080);