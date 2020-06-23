const db=require('./model.js');
const psql= require('./postgresql.js')
let service={}



//adding details to mtplCalculator collection
service.addmtpDetails = ((details) => {
    return db.insertmtpDetails(details).then((data) => {
        if (data == null) {
            let err = new Error("failed to insert details!!");
            err.status = 404;
            throw err;
        } else {
                return {"message":"details added successfully!!"};
        }
    })
})


//getting details by regNo
service.getDetails = ((regNo) => {
 
    return db.getData(regNo).then((data) => {
        if (data == null) {
            let err = new Error("details not available!!");
            err.status = 404;
            throw err;
        } else {
                return data;
        }
    })
})

//adding details to purchasePolicy collection
service.addPolicyDetails = ((details) => {
    return psql.createPolicy(details).then((data) => {
        if (data == null) {
            let err = new Error("failed to insert details!!");
            err.status = 404;
            throw err;
        } else {
                return {"message":"details added successfully!!"};
        }
    })
})

//getting details of purchasePolicy collection
service.getPolicyDetails = (() => {
    return psql.getPolicyDetails().then((data) => {
        if (data == null) {
            let err = new Error("failed to get details!!");
            err.status = 404;
            throw err;
        } else {
                return data;
        }
    })
})
module.exports=service;