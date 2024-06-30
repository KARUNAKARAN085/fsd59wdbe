const { request, response } = require('express');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../utils/config');

// define the controller for the user
const userController ={
    getAllUsers: async (request, response) => {
        try{
            const users = await User.find();
            response.status(200).json(users);
        } catch(error){
            response.status(500).json({message: error.message});
        }
    },

    register: async (request,response) =>{
        try{
            //get the user inputs from the request body
            const {name,email,password} = request.body;

            //check if the user already exists
            const existingUser = await User.findOne({email});

            // if the user already exist return error
            if(existingUser){
                return response.status(400).send({message: 'User already exists'});
            }
            
            //hash the password
            const hashedPassword = await bcrypt.hash(password, 10);

            //create an new user
            const newUser = new User({name, email, password: hashedPassword});

            //save the user
            const savedUser = await newUser.save();

            await newUser.save();
            response.status(201).send({
                message: 'User created successfully',
                user: savedUser
            });
        }
        catch(error){
            response.status(500).json({message: error.message});
        }
    },
    getUserById: async (request,response) => {
        try{
            // getthe user id from the request perameter
            const id = request.params.id;
            const user = await User.findById(id);
            if(!user){
                return response.status(404).send({message: 'User not found'});
            }
            response.status(200).json(user);

        }
        catch(error){
            response.status(500).json({message: error.message});
        }
    },
    login: async (request, response) =>{
        try{
            //get the user inputs from the request body
            const {email,password} = request.body;

            //check if the user exists in the db
            const user = await User.findOne({email});

            if(!user){
                return response.status(404).send({message: 'User not found'});
            }
            //check if the password is correct
            const isMatch = await bcrypt.compare(password, user.password);
            //if password is incorrect return error
            if(!isMatch){
                return response.status(400).send({message: 'Invalid password'});
            }
            // generate a jwt token
            const token = jwt.sign({ id: user._id }, SECRET_KEY);

            // set a cookie with the token
            response.cookie('token', token, {
                httpOnly: true,
                secure: true,
                sameSite: 'none',
                expires: new Date(Date.now() + 24 * 3600000)// 24 hours from login
                });

            response.status(200).json({
                message: 'Logged in successfully',
                token
            });
        }
        catch(error){
            response.status(500).json({message: error.message});
        }
    },
    logout: async (request,response) =>{
        try{
            //clear the cookie
            response.clearCookie('token');
            response.status(200).json({message: 'Logged out successfully'});
        } catch(error){
            response.status(500).json({message: error.message});
        }
    },
    updateuser: async (request,response) =>{
        try{
            //get the user id from the request body
            const userId = request.params.id;
            //get the details to update from the request body
            const {name, email} = request.body;
            //check if the user exists in the db
            const user = await User.findById(userId);
            //check if the user exists in the db
            if(!user){
                return response.status(404).send({message: 'User not found'});
            }
            
            if(name) user.name= name;
            if(email) user.email= email;
            //save the updated user
            const updatedUser = await user.save();
            response.status(200).json({message: 'User updated successfully', updatedUser});
        } catch(error){
            response.status(500).json({message: error.message});
        }
    },
    deleteuser: async (request,response) =>{
        try{
            //get the user id from the request body
            const userId = request.params.id;
            //check if the user exists in the db
            const user = await User.findById(userId);
            //check if the user exists in the db
            if(!user){
                return response.status(404).send({message: 'User not found'});
            }
            //delete the user from the DB
            await User.findOneAndDelete(userId);

            response.status(200).send({ message: 'User deleted successfully' });
        } catch(error){
            response.status(500).json({message: error.message});
        }
    },
    getProfile: async (request,response) =>{
        try {
            //get the user id from the request object
            const userId = request.userId;
            //find the user by id from the db
            const user = await User.findById(userId).select('-password -__v -_id');
            if(!user) {
                return response.status(404).send({message: 'User not found'});
            }
            response.status(200).json({message: 'User profile ', user});
        } catch (error) {
            
        }
    }
}
module.exports = userController;