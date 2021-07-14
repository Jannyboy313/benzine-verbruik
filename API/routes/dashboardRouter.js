const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController.js');

router.get('/', dashboardController.getDashboardData);
// router.get('/day/:id', addUserId, dashboardController);
// router.get('/month/:id', addUserId, dashboardController);
// router.get('/year/:id', addUserId, dashboardController);

module.exports = router;
