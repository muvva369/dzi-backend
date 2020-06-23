const config = require("../../resources/config/dev-props.json");
const jwt = require('jsonwebtoken');


function generateJWTToken(userData) {
   var token = jwt.sign(userData, config.jwt["secret-key"], {
      algorithm: config.jwt.algorithm,
      expiresIn: config.jwt["expiry-seconds"],
   })

   return token;
}

function verifyToken(jwtToken) {

   try {
      return jwt.verify(jwtToken, config.jwt["secret-key"]);

   } catch (e) {
      console.log('e:', e);
      return null;
   }
}

module.exports = {
   generateJWTToken: generateJWTToken,
   verifyToken: verifyToken
}