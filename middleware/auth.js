//import jwt
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../utils/config');
const { User } = require('../models/user');

const auth ={
    verifyToken: (req, res, next) =>{
        try{
            //get the token from the cookie
            const token = req.cookies.token;

            //if the token does not exist, return an error
            if(!token){
                return res.status(401).json({message: "Access Denied"});
            }
            //verify the token
            try {
                const decodedToken = jwt.verify(token, SECRET_KEY);
                // set the user id in the request object
                req.userId = decodedToken.id;
                //call the next middleware
                next();
            } catch (error) {
                return res.status(401).json({message: "Invalid Token"});
            }
        } catch (error){
            res.status(401).json({message: error.message })
        }
    },
    isAdmin: async (request, response, next) => {
        try {
            // get the user id from the request object
            const userId = request.userId;

            // find the user by id
            const user = await User.findById(userId);

            // if the user does not exist, return an error
            if (!user) {
                return response.status(404).send({ message: 'User not found' });
            }

            // if the user is not an admin, return an error
            if (user.role !== 'admin') {
                return response.status(403).send({ message: 'Access Forbidden' });
            }

            // call the next middleware
            next();
        } catch (error) {
            response.status(500).send({ message: error.message });
        }
    }
}

module.exports = auth;