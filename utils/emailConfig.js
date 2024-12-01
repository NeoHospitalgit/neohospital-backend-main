// backend/config/emailConfig.js
const nodemailer = require('nodemailer');

// Gmail SMTP server configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    // auth: {
    //     user: process.env.GMAIL_USER,
    //     pass: process.env.GMAIL_PASS
    // }

    auth: {
        user: 'webform@neohospital.com',
        pass: 'bpfcgskecageccvs' // App password
    }

});

module.exports = transporter;
