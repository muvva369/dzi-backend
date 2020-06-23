const db=require('./connection');
const mod=require('../model')

const mtpdata=
    {
        vehicleInfo: {
            registrationNumber:"TS16AB1234",
            certificateNumber:"12345678",
            purpose:"personal use",
            outsideBulgarianTerritory:"yes"
        },
        insuringParty:{ 
            egn:9207088124,
            permanentResidence:"abc,xyz street, mumbai",
            email:"xyz@gmail.com",
        },
        policy: { 
            startDate:new Date("2020-01-01"),
            policyLength:"12 months"
        },
        installment: {
            type:"single",
            period:"12 months",
            price:28500
        },
        additionalCover: {
            type:"None",
            price:12300
        }
    }


exports.setupDb=()=>{
    return db.any('delete from mtplcollection').then(details=>{
            return mod.adddetails(mtpdata).then((data)=>{
            if(data){
                let err=new Error("Insertion Failed");
                err.status=400;
                throw err;
            }
            else{
                return "Insertion Succcessful"
            }
        })
    })
}