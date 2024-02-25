const express = require('express');
const router = express.Router();
const controller = require('../controllers/trips');
const { expressjwt: jwt } = require('express-jwt');
const auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload',
    algorithms: ['HS256']
});

/* GET trips data */
// router.get('/', controller.tripList);
// router.get('/:tripCode', controller.tripsFindByCode);

router
    .route('/')
    .get(controller.tripList)
    .post(auth, controller.tripsAddTrip);
router
    .route('/:tripCode')
    .get(controller.tripsFindByCode)
    .put(auth, controller.tripsUpdateTrip);

module.exports = router;