const express = require("express");
const router = express.Router();
const careerForm = require("../controllers/career-controller");

router.route("/career").post(careerForm);

module.exports = router;
