const express = require('express');
const router = express.Router();
const controller = require('../controllers/contact');


/* GET travel page */
router.get('/', controller.contact);

module.exports = router;
