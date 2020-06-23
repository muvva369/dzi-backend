const config = require("../../resources/config/dev-props.json");
const authUtils = require("../utils/authUtils");
const jwt = require('jsonwebtoken');


function isValidRequest(req,res,next){
// userData ->  jwt-token, userData
//authUtils.verifyToken(jwt-token)

// removing header from token
let authHeader = req.header('Authorization');
    let token = authHeader.split(' ')[1]; 
if (!token) return res.status(401).send("Access denied. No token provided.");

  try {
    const decoded = authUtils.verifyToken(token);
    if (decoded) {
      req.body = decoded; 
    }

    next();
  } catch (ex) {
    //if invalid token
    res.status(400).send("Invalid token.");
  }
};



 function isAdmin(userData){
// userData ->  jwt-token, userData, role
// isValidRequest
//if role== admin
//return true
 }
 


 module.exports = {
    isValidRequest: isValidRequest,
    isAdmin:  isAdmin
  }


   