const dbModel=require('./utilities/connection');
const model={};


//inserting to mtplCalculator collection
model.insertmtpDetails=(detailsObj)=>{
    return dbModel.getmtpCalculatorCollection().then(model=>{
        return model.create(detailsObj).then((insertedData)=>{
            if(insertedData){
              
                return insertedData
            }
            else{
                return null;
            }
        })
    })
}


//getting data by registration no
model.getData = (regNo) => {
    return dbModel.getmtpCalculatorCollection().then((model) => {
       
        return model.findOne({ "vehicleInfo.registrationNumber": regNo }).then((details) => {
           
            if (details) {
                return details 
            }
            else {
                return null
            };
        })
    })
}


module.exports=model;