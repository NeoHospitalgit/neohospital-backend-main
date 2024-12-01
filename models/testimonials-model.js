const mongoose = require("mongoose");

const testimonialSchema = new mongoose.Schema(
  {
    text: { type: String },
    testurl: { type: String },
    author: { type: String },
    stars: { type: Number },
    status: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Testimonials = mongoose.model("Testimonials", testimonialSchema);

module.exports = Testimonials;
