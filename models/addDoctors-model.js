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
  },
  { timestamps: true }
);

const Doctor = model("Doctor", addDoctorsSchema);

module.exports = Doctor;
