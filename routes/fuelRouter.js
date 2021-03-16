const express = require('express');
const router = express.Router();
const fuelController = require('../controllers/fuelController.js');

router.post('/fuel', fuelController.postFuel);
router.get('/fuel/{id}', fuelController.getFuel);
router.put('/fuel/{id}', fuelController.putFuel);
router.delete('/fuel/{id}', fuelController.putFuel);

module.exports = router;