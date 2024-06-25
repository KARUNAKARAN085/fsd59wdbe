const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/usersController')

userRouter.get('/',userController.getAllUsers);
userRouter.post('/',userController.register);

module.exports = userRouter;