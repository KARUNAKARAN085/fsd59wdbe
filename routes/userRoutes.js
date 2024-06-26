const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/usersController')

userRouter.get('/',userController.getAllUsers);
userRouter.post('/',userController.register);
userRouter.get('/:id',userController.getUserById);
userRouter.post('/login',userController.login);

module.exports = userRouter;