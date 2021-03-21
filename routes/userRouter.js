const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');

router.post('/login', userController.login)
router.post('/register', userController.register);
// router.get('/:id', userController.getUser);
// router.put('/:id', userController.putUser);
// router.delete('/:id', userController.deleteUser);

module.exports = router;