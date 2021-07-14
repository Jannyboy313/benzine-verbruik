const express = require('express');
const router = express.Router();
const addUserId = require('../middleware/addUserId.js');

router.get('/', addUserId);

module.exports = router;
