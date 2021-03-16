const express = require('express');
const router = express.router();
const rideController = require('../controllers/rideController.js');

router.post('/ride', rideController.postRide);
router.get('/ride/{id}', rideController.getRide);
router.put('/ride/{id}', rideController.putRide);
router.delete('/ride/{id}', rideController.putRide);