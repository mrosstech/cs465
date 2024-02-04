const express = require('express');
const router = express.Router();
const controller = require('../controllers/trips');


/* GET trips data */
router.get('/', controller.tripList);
router.get('/:tripCode', controller.tripsFindByCode);

module.exports = router;