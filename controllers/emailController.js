// backend/controllers/emailController.js
const transporter = require('../utils/emailConfig');


const toEmails = 'opd@neohospital.com';
// const ccEmails = 'shruti334000@gmail.com';
// const toEmails = ['krapter.dev@gmail.com', 'shruti334000.com', 'opd@neohospital.com'];
const ccEmails = ['reception@neohospital.com', 'info@neohospital.com', 'neohospital50@gmail.com','sumitpawar@neohospital.com'];
// const bccEmails = 'hakimkhan1118@gmail.com';
// const ccEmails = ['cc1@example.com', 'cc2@example.com'];
// const bccEmails = ['bcc1@example.com', 'bcc2@example.com'];

const sendMail = async (req, res) => {
  const { name, email, number, message } = req.body;
  const subject = `NEO Hospital Enquiry ${name} or ${email}`;

  let mailOptions = {
    from: `"NEO Hospital" <${email}>`,
    to: toEmails,
    cc: ccEmails,
    // bcc: bccEmails, 
    // to: process.env.GMAIL_USER,
    subject: subject,

    html: `<div style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0 auto; padding: 80px; display: grid; align-items:center; justify-items: center; width:500px">
    <div style="line-height: 1.6; padding: 20px; background-color: #fff; border-radius: 5px; box-shadow: 0 2px 10px #0000001a;">
        <h1 style="color: #2f80be; text-align:center">Enquiry Booking</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Number:</strong> ${number}</p>
        <p><strong>Message:</strong> ${message}</p>
    </div>
  </div>`,
    headers: {
      'Message-ID': `<${new Date().getTime()}@neohospital.com>`,
      'X-Unique-Id': `${new Date().getTime()}_${Math.random()}`,
    },
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ message: 'Error sending email', error });
    } else {
      res.status(200).json({ message: 'Email sent successfully', info });
    }
  });
};


const sendcontactMail = async (req, res) => {
  const { name, email, number, message } = req.body;
  const subject = `NEO Hospital Enquiry ${name} or ${email}`;


  let mailOptions = {
    from: `"NEO Hospital" <${email}>`,
    to: toEmails,
    cc: ccEmails,
    // bcc: bccEmails,
    // to: process.env.GMAIL_USER,
    subject: subject,

    html: `<div style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0 auto; padding: 80px; display: grid; align-items:center; justify-items: center; width:500px">
    <div style="line-height: 1.6; padding: 20px; background-color: #fff; border-radius: 5px; box-shadow: 0 2px 10px #0000001a;">
        <h1 style="color: #2f80be; text-align:center">Enquiry Booking</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Number:</strong> ${number}</p>
        <p><strong>Message:</strong> ${message}</p>
    </div>
  </div>`,
    headers: {
      'Message-ID': `<${new Date().getTime()}@neohospital.com>`,
      'X-Unique-Id': `${new Date().getTime()}_${Math.random()}`,
    },

    // text: `Name: ${name}\nEmail: ${email}\nNumber: ${number}\nMessage: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ message: 'Error sending email', error });
    } else {
      res.status(200).json({ message: 'Email sent successfully', info });
    }
  });
};



const senddoctorMail = async (req, res) => {
  const { name, email, number, bookdate, booktime, doctorname, message } = req.body;

  // Unique subject including date and time to prevent email grouping in Gmail
  const subject = `NEO Hospital Appointment Booking with ${doctorname} on ${bookdate} at ${booktime}`;

  let mailOptions = {
    from: `"NEO Hospital" <${email}>`,
    to: toEmails,
    cc: ccEmails,
    subject: subject,
    html: `<div style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0 auto; padding: 80px; display: grid; align-items:center; justify-items: center; width:500px">
      <div style="line-height: 1.6; padding: 20px; background-color: #fff; border-radius: 5px; box-shadow: 0 2px 10px #0000001a;">
          <h1 style="color: #2f80be; text-align:center">Appointment Booking</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Number:</strong> ${number}</p>
          <p><strong>Doctor Name:</strong> ${doctorname}</p>
          <p><strong>Slot Date:</strong> ${bookdate}</p>
          <p><strong>Slot Time:</strong> ${booktime}</p>
          <p><strong>Message:</strong> ${message}</p>
      </div>
    </div>`,
    headers: {
      'Message-ID': `<${new Date().getTime()}@neohospital.com>`,
      'X-Unique-Id': `${new Date().getTime()}_${Math.random()}`,
    },
  };

  // Sending the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error); // Better error logging
      return res.status(500).json({ message: 'Error sending email', error });
    } else {
      res.status(200).json({ message: 'Email sent successfully', info });
    }
  });


};

module.exports = { sendMail, sendcontactMail, senddoctorMail };
