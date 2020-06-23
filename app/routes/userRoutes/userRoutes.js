var express = require("express");
var router = express.Router();
var userController = require("../../controllers/userControllers/userController.js");
const auth = require("../../services/auth")
 

//to get individual user  details by email of user
router.get("/", auth.isValidRequest , userController.findUserID);

//To Create User using email and password and assign token to it.
 
router.post("/createUserfirst", userController.createUserfirst);

router.post("/loginUser", userController.loginUser);


module.exports = router;
