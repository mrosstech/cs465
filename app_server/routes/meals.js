const express = require('express');
const router = express.Router();
const controller = require('../controllers/meals');


/* GET travel page */
router.get('/', controller.meals);

module.exports = router;
