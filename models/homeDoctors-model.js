const { Schema, model } = require("mongoose");

const addHomeDoctorsSchema = new Schema(
  {
    drTitle: { type: String },
    drDepartment: { type: String },
    drSlug: { type: String },
    drImage: { type: String },
    drQualification: { type: String },
  drExperience: { type: Number, default: 0 },
    drDetail: { type: String },
    drTiming: { type: String },
    drStatus: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const homeDoctor = model("HomeDoctor", addHomeDoctorsSchema);

module.exports = homeDoctor;
