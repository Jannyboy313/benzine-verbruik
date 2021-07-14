const express = require('express');
const router = express.Router();
const addUserId = require('../middleware/addUserId.js');
const dashboardController = require('../controllers/dashboardController.js');

router.get('/', addUserId, dashboardController);

module.exports = router;
