const { Schema, model } = require("mongoose");

const serviceSchema = new Schema({
  serviceCat: { type: String },
  serviceTitle: { type: String },
  slug: { type: String },
  image: { type: String },
  serviceDetail: { type: String },
  serviceSeoTags: { type: String },
  status: { type: Boolean, default: true },
});

const Service = new model("Service", serviceSchema);

module.exports = Service;
