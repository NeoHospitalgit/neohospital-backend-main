const mongoose = require("mongoose");

const SeoPageSchema = new mongoose.Schema(
  {
    pageurl: { type: String },
    seotags: { type: String },
    status: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const SeoPages = mongoose.model("SeoPages", SeoPageSchema);

module.exports = SeoPages;
