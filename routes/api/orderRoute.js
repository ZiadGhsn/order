const router = require("express").Router();
const controller = require("../../controllers/orderController");

router.post("/create",controller.createOrder);

router.get("/get-all", controller.getAllOrders);

router.get("/get-by-id/:id", controller.getOrderById);

router.put("/update-by-id/:id", controller.updateOrderById);

router.delete("/delete-by-id/:id", controller.deleteOrderById);

module.exports = router;