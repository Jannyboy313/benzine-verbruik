const express = require('express');
const router = express.Router();
const rideController = require('../controllers/rideController.js');

router.post('/', rideController.postRide);
// router.get('/{id}', rideController.getRide);
// router.get('/', rideController.getRides);
// router.put('/{id}', rideController.putRide);
// router.delete('/{id}', rideController.putRide);

module.exports = router;