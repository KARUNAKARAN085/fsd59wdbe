//import jwt
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../utils/config');

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
    }
}

module.exports = auth;