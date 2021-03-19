const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');

router.post('/', userController.postUser);
// router.get('/user/{id}', userController.getUser);
// router.get('/', userController.getUsers);
// router.put('/user/{id}', userController.putUser);
// router.delete('/user/{id}', userController.putUser);

module.exports = router;