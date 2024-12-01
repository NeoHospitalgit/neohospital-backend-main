const express = require("express");
const categoryController = require("../controllers/category-controller");
const { uploadCategoryImage } = require("../utils/multerConfig");

const authMiddleware = require("../middlewares/auth-middleware");
const adminMiddleware = require("../middlewares/admin-middleware");

const router = express.Router();

router
  .route("/category")
  .post(
    authMiddleware,
    adminMiddleware,
    uploadCategoryImage.single("image"),
    categoryController.addCategory
  );

router.route("/view-category").get(categoryController.viewAllcategory);
router
  .route("/category/:id")
  .delete(authMiddleware, adminMiddleware, categoryController.deleteCategory);

router
  .route("/category/:id")
  .put(
    authMiddleware,
    adminMiddleware,
    uploadCategoryImage.single("image"),
    categoryController.updateCategory
  );

router
  .route("/category/:id")
  .get(authMiddleware, adminMiddleware, categoryController.viewOneCategory);

module.exports = router;
