const express = require("express");
const serviceCategoryController = require("../controllers/service-category-controller");
const { uploadServiceImage } = require("../utils/multerConfig");
const router = express.Router();

router.post(
  "/add-service-category",
  uploadServiceImage.single("image"),
  serviceCategoryController.addServiceCategory
);

router.get(
  "/manage-service-category",
  serviceCategoryController.viewAllServiceCategory
);

router.delete(
  "/add-service-category/:id",
  serviceCategoryController.deleteServiceCategory
);

router.put(
  "/add-service-category/:id",
  uploadServiceImage.single("image"),
  serviceCategoryController.updateServiceCategory
);

router.get(
  "/add-service-category/:id",
  serviceCategoryController.getServiceCategoryById
);

module.exports = router;
