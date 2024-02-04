const express = require("express");
const tripRoutes = require('./trips');
const router = express.Router();

router.use("/trips", tripRoutes);


module.exports = router;