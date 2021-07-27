const express = require('express');
const router = express.Router();
const fuelController = require('../controllers/fuelController.js');
const addUserId = require('../middleware/addUserId.js');

router.post('/', addUserId, fuelController.postFuel);
router.get('/', fuelController.getFuels);
router.get('/:id', fuelController.getFuel);
router.put('/:id', fuelController.putFuel);
router.delete('/:id', fuelController.putFuel);

module.exports = router;
