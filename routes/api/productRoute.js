const router = require("express").Router();
const controller = require("../../controllers/productController");

router.post("/create",controller.createProduct);

router.get("/get-all", controller.getAllProducts);

router.get("/get-by-id/:id", controller.getProductById);

router.put("/update-by-id/:id", controller.updateProductById);

router.delete("/delete-by-id/:id", controller.deleteProductById);

module.exports = router;