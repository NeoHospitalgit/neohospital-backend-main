const express = require("express");
const serviceController = require("../controllers/service-controller");
const { uploadServiceImage } = require("../utils/multerConfig");

const router = express.Router();

router.post(
  "/add-service",
  uploadServiceImage.single("image"),
  serviceController.addService
);

router.get("/manage-service", serviceController.viewAllService);

router.delete("/add-service/:id", serviceController.deleteService);

router.put(
  "/add-service/:id",
  uploadServiceImage.single("image"),
  serviceController.updateService
);

router.get("/add-service/:id", serviceController.getServiceById);

module.exports = router;
