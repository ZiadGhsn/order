const router = require('express').Router();
const categoryRoute = require("./categoryRoute");
const customerRoute = require("./customerRoute");
const orderRoute = require("./orderRoute");
const productRoute = require("./productRoute");


router.use("/category", categoryRoute);
router.use("/customer", customerRoute);
router.use("/order", orderRoute);
router.use("/product", productRoute);

module.exports = router;