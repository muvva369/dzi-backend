const db=require('./model.js');
const psql= require('./postgresql.js')
let service={}





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