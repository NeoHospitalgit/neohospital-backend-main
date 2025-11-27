const homeDoctor = require("../models/homeDoctors-model");

const addHomeDoctor = async (req, res) => {
  try {
    const {
      drTitle,
      drDepartment,
      drSlug,
      drQualification,
      drExperience,
      drImage,
      drDetail,
      drTiming,
      drStatus,
    } = req.body;

    const doctorData = new homeDoctor({
      drTitle,
      drDepartment,
      drSlug,
      drQualification,
      drExperience,
      drDetail,
      drImage,
      drTiming,
      drStatus,
    });

    await doctorData.save();
    return res
      .status(200)
      .json({ message: "Doctor added successfully", homedoctor: doctorData });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to add Doctor" });
  }
};
// deleteHomeDoctor controller
const deleteHomeDoctor = async (req, res) => {
  try {
    await homeDoctor.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message: "Doctor deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to delete Doctor" });
  }
};
// updateHomeDoctor controller
const updateHomeDoctor = async (req, res) => {
  try {
    const { hdocId } = req.params;
    const {
      drTitle,
      drDepartment,
      drSlug,
      drQualification,
      drExperience,
      drDetail,
      drTiming,
      drStatus,
    } = req.body;
    console.log("body", req.body);
    console.log("file", req.file);
    let drImage = null;

    if (req.file) {
      drImage = req.file.filename;
    } else {
      const existingDoctorimg = await homeDoctor.findById(docId);

      if (existingDoctorimg) {
        drImage = existingDoctorimg.drImage;
      }
    }

    const updatedDoctor = await homeDoctor.findByIdAndUpdate(
      req.params.id,
      {
        drTitle,
        drDepartment,
        drSlug,
        drQualification,
        drExperience,
        drImage,
        drDetail,
        drTiming,
        drStatus,
      },
      { new: true }
    );

    return res.status(200).json({
      message: "Doctor updated successfully",
      doctor: updatedDoctor,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to update Category" });
  }
};
// viewAllHomeDoctors controller
const viewAllHomeDoctors = async (req, res) => {
  try {
    const doctors = await homeDoctor.find();
    if (!doctors.length) {
      return res.status(404).json({ message: "No Doctor found" });
    }
    return res.status(200).json({ doctors });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to fetch Doctor" });
  }
};
// getHomeDoctorById controller
const getHomeDoctorById = async (req, res) => {
  try {
    const doctors = await homeDoctor.findById(req.params.id);
    if (!doctors) {
      return res.status(404).json({ message: "Doctor not found" });
    }
    return res.status(200).json({ doctors });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to fetch Doctor" });
  }
};

module.exports = {
  addHomeDoctor,
  deleteHomeDoctor,
  updateHomeDoctor,
  viewAllHomeDoctors,
  getHomeDoctorById,
};
