const router = require("express").Router();
const userRoutes = require("./userRoutes");
const wineRoutes = require("./wineRoutes");
const orderRoutes = require("./orderRoutes");

router.use("/user", userRoutes);
router.use("/wine", wineRoutes);
router.use("/order", orderRoutes);

module.exports = router;
