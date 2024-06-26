const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/usersController')

userRouter.post('/login',userController.login);
userRouter.get('/logout',userController.logout);
userRouter.get('/',userController.getAllUsers);
userRouter.post('/',userController.register);
userRouter.get('/:id',userController.getUserById);

module.exports = userRouter;