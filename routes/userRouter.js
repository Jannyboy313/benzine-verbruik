const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');

router.post('/login', userController.postLogin)
router.post('/', userController.postUser);
// router.get('/', userController.getUsers);
// router.get('/:id', userController.getUser);
// router.put('/:id', userController.putUser);
// router.delete('/:id', userController.putUser);

module.exports = router;