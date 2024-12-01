const Career = require("../models/career-model");

const careerForm = async (req, res) => {
  try {
    const response = req.body;
    console.log(response);
    await Career.create(response);
    return res
      .status(200)
      .json({ message: "career message send successfully" });
  } catch (error) {
    return res.status(500).json({ message: "career message not delivered" });
  }
};

module.exports = careerForm;
