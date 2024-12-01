const express = require("express");
const router = express.Router();
const multer = require("multer");

const storageConfig = (destination) =>
  multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, destination);
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      cb(null, `${file.fieldname}-${uniqueSuffix}-${file.originalname}`);
    },
  });

const uploadDoctorImage = multer({ storage: storageConfig("uploads/doctors") });

const uploadBlogImage = multer({ storage: storageConfig("uploads/blogs") });

const uploadServiceImage = multer({
  storage: storageConfig("uploads/Service"),
});

const uploadCreerForm = multer({
  storage: storageConfig("uploads/files"),
});

const uploadCategoryImage = multer({
  storage: storageConfig("uploads/categories"),
});

// uploadhomeDocotrs
const uploadhomeDocotrs = multer({
  storage: storageConfig("uploads/homedoctors"),
});

module.exports = {
  uploadDoctorImage,
  uploadBlogImage,
  uploadCreerForm,
  uploadCategoryImage,
  uploadhomeDocotrs,
  uploadServiceImage,
};
