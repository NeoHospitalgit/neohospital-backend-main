const Service = require("../models/service-model");

const addService = async (req, res) => {
  try {
    const {
      serviceTitle,
      slug,
      serviceSeoTags,
      serviceCat,
      serviceDetail,
      status,
    } = req.body;
    const image = req.file ? req.file.filename : "";

    const newService = new Service({
      serviceTitle,
      slug,
      image,
      serviceSeoTags,
      serviceCat,
      serviceDetail,
      status,
    });

    await newService.save();

    return res.status(200).json({
      message: "Service added successfully",
      service: newService,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Failed to add Service", error: error.message });
  }
};

const deleteService = async (req, res) => {
  try {
    await Service.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message: "Service deleted successfully" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Failed to delete Service", error: error.message });
  }
};

const updateService = async (req, res) => {
  try {
    const {
      serviceTitle,
      slug,
      serviceSeoTags,
      serviceCat,
      serviceDetail,
      status,
    } = req.body;
    let image = null;

    if (req.file) {
      image = req.file.filename;
    } else {
      const existingService = await Service.findById(req.params.id);
      if (existingService) {
        image = existingService.image; // Retain the existing image
      }
    }

    const updatedService = await Service.findByIdAndUpdate(
      req.params.id,
      {
        serviceTitle,
        slug,
        image,
        serviceSeoTags,
        serviceCat,
        serviceDetail,
        status,
      },
      { new: true }
    );

    return res.status(200).json({
      message: "Service updated successfully",
      service: updatedService,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Failed to update Service", error: error.message });
  }
};

const viewAllService = async (req, res) => {
  try {
    const services = await Service.find();
    if (!services || services.length === 0) {
      return res.status(404).json({ message: "No Service found" });
    }
    return res.status(200).json({ services });
  } catch (error) {
    console.error(`Error fetching all services: ${error}`);
    return res
      .status(500)
      .json({ message: "Failed to fetch all Services", error: error.message });
  }
};

const getServiceById = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }
    return res.status(200).json({ service });
  } catch (error) {
    console.error(`Error fetching service by ID: ${error}`);
    return res
      .status(500)
      .json({ message: "Failed to fetch Service by ID", error: error.message });
  }
};

module.exports = {
  addService,
  deleteService,
  updateService,
  viewAllService,
  getServiceById,
};
