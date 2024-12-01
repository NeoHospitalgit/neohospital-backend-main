const mongoose = require("mongoose");

const ServiceCategorySchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  image: { type: String },
  seoTags: { type: String },
  status: { type: Boolean, default: true },
});

const ServiceCategory = mongoose.model(
  "ServiceCategory",
  ServiceCategorySchema
);

module.exports = ServiceCategory;
