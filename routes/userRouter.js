const express = require('express');
const router = express.router();
const userController = require('../controllers/userController.js');

router.post('/user', userController.postUser)
router.get('/user/{id}', userController.getUser)
router.put('/user/{id}', userController.putUser)
router.delete('/user/{id}', userController.putUser)