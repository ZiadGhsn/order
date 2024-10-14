const router = require("express").Router();
const apiRouter = require("./api");

router.use("/test", apiRouter);

module.exports = router;
