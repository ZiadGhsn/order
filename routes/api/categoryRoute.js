const router = require("express").Router();
const controller = require("../../controllers/categoryController");

router.post("/create",controller.createCategory);

router.get("/get-all", controller.getAllCategories);

router.get("/get-by-id/:id", controller.getCategoryById);

router.put("/update-by-id/:id", controller.updateCategoryById);

router.delete("/delete-by-id/:id", controller.deleteCategoryById);

module.exports = router;