const express = require('express');
const router = express.Router();
const controller = require('../controllers/trips');


/* GET trips data */
// router.get('/', controller.tripList);
// router.get('/:tripCode', controller.tripsFindByCode);

router
    .route('/')
    .get(controller.tripList)
    .post(controller.tripsAddTrip);
router
    .route('/:tripCode')
    .get(controller.tripsFindByCode)
    .put(controller.tripsUpdateTrip);

module.exports = router;