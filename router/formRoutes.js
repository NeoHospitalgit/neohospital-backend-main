// backend/routes/formRoutes.js
const express = require('express');
const send = require('../controllers/emailController');
const { saveFormEntry } = require('../controllers/formController');
const router = express.Router();

// Route to save form data
router.post('/save-form', saveFormEntry);

// Route to send email
router.route("/send-email").post(send.sendMail);
router.route("/send-contact-email").post(send.sendcontactMail);
router.route("/send-doctoremail").post(send.senddoctorMail);

module.exports = router;
