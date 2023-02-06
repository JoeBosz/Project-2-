const router = require("express").Router();
const userRoutes = require("./userRoutes");
// const wineRoutes = require("./wineRoutes");


router.use("/user", userRoutes);
// router.use("/wine", wineRoutes);


module.exports = router;
