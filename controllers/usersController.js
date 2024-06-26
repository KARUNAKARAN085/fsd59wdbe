const { request, response } = require('express');
const User = require('../models/user');
const bcrypt = require('bcrypt');


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
            response.status(200).send({message: 'login succussfull'});
        }
        catch(error){
            response.status(500).json({message: error.message});
        }
    }
}
module.exports = userController;