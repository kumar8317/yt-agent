      // Define functions for sending email and WhatsApp notifications
      const nodemailer = require('nodemailer');

      function sendEmail(to, subject, text) {
        let transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'youremail@gmail.com',
            pass: 'yourpassword'
          }
        });

        let mailOptions = {
          from: 'youremail@gmail.com',
          to: to,
          subject: subject,
          text: text
        };

        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });
      }

      function sendWhatsApp(to, message) {
        // WhatsApp sending logic here
      }