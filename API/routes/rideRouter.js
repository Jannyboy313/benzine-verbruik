const express = require('express');
const router = express.Router();
const rideController = require('../controllers/rideController.js');
const addUserId = require('../middleware/addUserId.js');

router.post('/', addUserId, rideController.postRide);
router.get('/', rideController.getRides);
router.get('/:id', rideController.getRide);
router.put('/:id', rideController.putRide);
router.delete('/:id', rideController.deleteRide);

module.exports = router;
