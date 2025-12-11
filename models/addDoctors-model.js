const { Schema, model } = require("mongoose");

const addDoctorsSchema = new Schema(
  {
    drTitle: { type: String },
    drDepartment: { type: String },
    drSlug: { type: String },
    drImage: { type: String },
    drQualification: { type: String },
    drDetail: { type: String },
    drTiming: { type: String },
    drStatus: { type: Boolean, default: true },
    drExperience: { type: Number },
    drMetaTags: { type: String },
  },
  { timestamps: true }
);

const Doctor = model("Doctor", addDoctorsSchema);

module.exports = Doctor;
