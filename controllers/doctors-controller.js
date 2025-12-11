const Doctor = require("../models/addDoctors-model");

const addDoctor = async (req, res) => {
  try {
    const {
      drTitle,
      drDepartment,
      drSlug,
      drQualification,
      drDetail,
      drTiming,
      drStatus,
      drExperience,
      drMetaTags,
    } = req.body;

    const existingDoctor = await Doctor.findOne({ drTitle });

    if (existingDoctor) {
      return res.status(400).json({ message: "This Doctor already added" });
    }

    const drImage = req.file ? req.file.filename : "";
    const doctorData = new Doctor({
      drTitle,
      drDepartment,
      drSlug,
      drQualification,
      drDetail,
      drImage,
      drTiming,
      drStatus,
      drExperience: drExperience ? Number(drExperience) : undefined,
      drMetaTags,
    });

    await doctorData.save();
    return res
      .status(200)
      .json({ message: "Doctor added successfully", doctor: doctorData });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to add Doctor" });
  }
};

const deleteDoctor = async (req, res) => {
  try {
    await Doctor.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message: "Doctor Remove Successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to Remove Doctor" });
  }
};

const updateDoctor = async (req, res) => {
  try {
    const { docId } = req.params;
    const {
      drTitle,
      drDepartment,
      drSlug,
      drQualification,
      drDetail,
      drTiming,
      drStatus,
      drExperience,
      drMetaTags,
    } = req.body;
    let drImage = null;

    if (req.file) {
      drImage = req.file.filename;
    } else {
      const existingDoctorimg = await Doctor.findById(docId);

      if (existingDoctorimg) {
        drImage = existingDoctorimg.drImage;
      }
    }

    const updatedDoctor = await Doctor.findByIdAndUpdate(
      req.params.id,
      {
        drTitle,
        drDepartment,
        drSlug,
        drQualification,
        drImage,
        drDetail,
        drTiming,
        drStatus,
        drExperience: drExperience ? Number(drExperience) : undefined,
        drMetaTags,
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

const viewAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    if (!doctors.length) {
      return res.status(404).json({ message: "No Doctor found" });
    }
    return res.status(200).json({ doctors });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to fetch Doctor" });
  }
};

const getDoctorById = async (req, res) => {
  try {
    const doctors = await Doctor.findById(req.params.id);
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
  addDoctor,
  deleteDoctor,
  updateDoctor,
  viewAllDoctors,
  getDoctorById,
};
