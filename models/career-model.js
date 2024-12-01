const mongoose = require("mongoose");

const careerSchema = new mongoose.Schema(
  {
    name: String,
    phone: String,
    email: String,
    resume: String,
    location: String,
    applyFor: String,
    qualification: String,
    experience: String,
    message: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Career", careerSchema);
