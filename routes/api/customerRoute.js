const router = require("express").Router();
const controller = require("../../controllers/customerController");

router.post("/create",controller.createCustomer);

router.get("/get-all", controller.getAllCustomers);

router.get("/get-by-id/:id", controller.getCustomerById);

router.put("/update-by-id/:id", controller.updateCustomerById);

router.delete("/delete-by-id/:id", controller.deleteCustomerById);

module.exports = router;