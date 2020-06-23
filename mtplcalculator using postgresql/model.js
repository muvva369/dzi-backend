const db=require('./utilities/connection')
const pgp=require('pg-promise')()

model={}


model.getdetailbyregno=(regno)=>{
    return db.any('select * from mtplcollection where "registrationNumber"=$1',regno).then(data=>{
        return data
    })
}

model.adddetails=(obj)=>{
    return db.none('insert into mtplcollection("registrationNumber","certificateNumber","purpose","outsideBulgarianTerritory","egn","permanentResidence","email","startDate","policyLength","type","period","price","addtype","addprice") values(${vehicleInfo.registrationNumber},${vehicleInfo.certificateNumber},${vehicleInfo.purpose},${vehicleInfo.outsideBulgarianTerritory},${insuringParty.egn},${insuringParty.permanentResidence},${insuringParty.email},${policy.startDate},${policy.policyLength},${installment.type},${installment.period},${installment.price},${additionalCover.type},${additionalCover.price})',obj)
}
module.exports=model;