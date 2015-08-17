/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var nodemailer = require('nodemailer');
var wellknown = require('nodemailer-wellknown');

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'gmail.user@gmail.com',
        pass: 'userpass'
    }
});

exports.sendMail = function(req, res) {
    var fullName = req.body.name + " " + req.body.surname;

    var mailOptions = {
        from: fullName + " <" + req.body.email + ">",
        to: 'gmail.user@gmail.com',
        subject: "Contact form",
        text: req.body.message + '\n' + req.body.phone,
        html: '<p>' + req.body.message + '</p>' +
                '<p>' + req.body.phone + '</p>'
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
        res.send("Thanks!, I'll get back to you soon.");
    });
};