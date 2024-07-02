const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/usersController')
//import auth
const auth = require('../middleware/auth');

//public routes
userRouter.post('/',userController.register);
userRouter.post('/login',userController.login);

//private routes
userRouter.get('/', auth.verifyToken,auth.isAdmin, userController.getAllUsers);
userRouter.get('/logout', auth.verifyToken, userController.logout);

userRouter.get('/profile', auth.verifyToken, userController.getProfile);
userRouter.get('/profile', auth.verifyToken, userController.updateProfile);

userRouter.get('/:id',auth.verifyToken, userController.getUserById);
userRouter.put('/:id',auth.verifyToken, userController.updateuser);
userRouter.delete('/:id',auth.verifyToken, userController.deleteuser);

module.exports = userRouter;