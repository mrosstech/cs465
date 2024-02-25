const express = require("express");
const tripRoutes = require('./trips');
const authController = require('../controllers/authentication');
const router = express.Router();

router.use("/trips", tripRoutes);
router
    .route('/login')
    .post(authController.login);

router
    .route('/register')
    .post(authController.register);


module.exports = router;