const SeoPages = require("../models/seopages-model");

const addseopages = async (req, res) => {
  try {
    const { pageurl, seotags, status } = req.body;
    console.log(req.body);

    const newseopages = new SeoPages({ pageurl, seotags, status });
    await newseopages.save();
    return res.status(201).json({
      message: "seopages added successfully",
      seopages: newseopages,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to add seopages" });
  }
};

const updateseopages = async (req, res) => {
  try {
    const { id } = req.params;
    const { pageurl, seotags, status } = req.body;

    const updatedseopages = await SeoPages.findByIdAndUpdate(
      id,
      {
        pageurl,
        seotags,
        status,
      },
      { new: true }
    );

    return res.status(200).json({
      message: "seopages updated successfully",
      seopages: updatedseopages,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to update seopages" });
  }
};
const viewAllseopages = async (req, res) => {
  try {
    const seopages = await SeoPages.find();
    if (!seopages.length) {
      return res.status(404).json({ message: "No seopages found" });
    }
    return res.status(200).json({ seopages });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to fetch seopages" });
  }
};

const deleteseopages = async (req, res) => {
  try {
    const seopages = await SeoPages.findByIdAndDelete(req.params.id);
    if (!seopages) {
      return res.status(404).json({ message: "seopages deleted successfully" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to delete Blog" });
  }
};

const viewOneseopages = async (req, res) => {
  try {
    const seopages = await SeoPages.findById(req.params.id);
    if (!seopages) {
      return res.status(404).json({ message: "seopages not found" });
    }
    return res.status(200).json({ seopages });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to fetch seopages" });
  }
};

module.exports = {
  addseopages,
  viewAllseopages,
  deleteseopages,
  updateseopages,
  viewOneseopages,
};
