const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  image: { type: String, required: false },
  seo_tag: { type: String, required: false },
  content: { type: String, required: false },
  status: { type: Boolean, default: true },
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
