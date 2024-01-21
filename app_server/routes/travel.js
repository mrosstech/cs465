const express = require('express');
const router = express.Router();
const controller = require('../controllers/travel');


/* GET travel page */
router.get('/travel', controller.travel);

module.exports = router;
