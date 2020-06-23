const db=require('./model.js');
let service={}

//adding details to mtplCalculator collection
service.adddetails = ((details) => {
    return db.adddetails(details).then((data) => {
        if (data == null) {
            //  return {"message":"details added successfully!!"};
            return {"oneInst":500,"twoInst":510,"fourInst":530}  //  returning dummy data
        } else {
            let err = new Error("failed to insert details!!");
            err.status = 404;
            throw err; 
        }
    })
})

//getting details by regNo
service.getdetailbyregno = ((regNo) => {
 
    return db.getdetailbyregno(regNo).then((data) => {
        if (data.length == 0) {
            let err = new Error("details not available!!");
            err.status = 404;
            throw err;
        } else {
                return data[0];
        }
    })
})


module.exports=service;