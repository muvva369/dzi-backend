const db = require("../../models/index");
var dataFormat = require("../../../resources/format/data.json")
var errorFormat = require("../../../resources/format/error.json")
const bcrypt = require('bcryptjs');
const authUtils = require("../../utils/authUtils");
const User = db.users;



function createUserfirst(req, res) {
    userData = req.body;
    if (userData.password != userData.confirmPassword) {
        errorFormat.error = "Passwords do not match"
        res.status(400).send(errorFormat)
    } else {
        userData.password = bcrypt.hashSync(req.body.password, 10);
        User.create(userData).then(async data => {
        dataFormat.data = data
        var userId = await User.findAll({
            attributes: ['id'],
            where: { email: req.body.email }
        })
        dataFormat.data.id = userId[0].id;
        // JWT token generation 
        var userData = {
            id: dataFormat.data.id,
        };
        var token = authUtils.generateJWTToken({ userData }); // email , mobile not required for JWT
        userData.token = token
        userData.email =  dataFormat.data.email
        
        res.status(200).send(userData); // id,mobile not required 
    }).catch(err => {
            errorFormat.error = err || "Some error occur while creating user."
            res.status(400).send(errorFormat);
        });
    }
    
}

function loginUser(req,res) {
    User.findOne({
        where: { email: req.body.email }
    }).then(data => {
        if (data.length == 0 ) {
            errorFormat.error = "Invalid User"
            res.status(400).send(errorFormat);
        }  else {
            var userData = {
                id: data.id 
            }
            bcrypt.compare(req.body.password,data.password,function (err,result) {
                if (result == true) {
                    var token = authUtils.generateJWTToken({ userData});
                    userData.email = data.email
                    userData.token = token
                    res.status(200).send(userData) // remove success  from JSON object
                } else {
                    errorFormat.error = "Password do not match"
                    res.status(401).send(errorFormat) // response should be in JSON // make 401 unauthorised

                }
            }); 
             
            
        }
    }).catch(err => {
        errorFormat.error = err || "Internal server error"
        res.status(500).send(errorFormat);
    })
        
}


function findUserID(req, res) {
    User.findAll({
        attributes: ['id','mobile'],
        where: { email: req.body.userData.email }
    }).then(data => {
        if (data.length > 0) {
            res.status(200).send(data);
        } else {
            errorFormat.error = "No user data available for this email"
            res.status(401).send(errorFormat);
        }
    })
        .catch(err => {
            errorFormat.error = err || "Internal Server Error"
            res.status(500).send(errorFormat);
        })

}



module.exports = {
    createUserfirst: createUserfirst, // Insurance Route
    loginUser: loginUser , // Insurance Route
    findUserID: findUserID
}