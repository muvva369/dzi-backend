const { Schema } = require("mongoose");
const Moongoose = require("mongoose");
Moongoose.Promise = global.Promise;
Moongoose.set('useCreateIndex', true);
const url = "mongodb://localhost:27017/InsuranceDB";
const collection = {};


const mtpCalculatorSchema = Schema({
    vehicleInfo: {
        registrationNumber:{ type: String, required: true, unique: true},
        certificateNumber:{type: Number, required: true, unique: true},
        purpose:{type: String, required: true},
        outsideBulgarianTerritory:{type: String, required: true,enum:["yes","no"] }
                },
    insuringParty:{ 
        egn:{ type: Number, required: true },
        permanentResidence:{ type: String, required: true },
        email:{ type: String, required: true },
    },
    policy: { 
        startDate:{type: Date, required: true },
        policyLength:{type: String, required: true}
    },
    installment: {
        type:{ type: String, required: true,enum:["single","two","four"] },
        period:{ type: String, required: true,enum:["12 months","6 months","3 months"]},
        price:{type: Number, required: true}
    },
    additionalCover: {
        type:{ type: String, required: true,enum:["None","Premium","VIP"] },
        price:{type: Number, required: true}
    }
}, { collection: "mtpCalculator" });

collection.getmtpCalculatorCollection = () => {
    return Moongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then((database) => {
        return database.model('mtpCalculator', mtpCalculatorSchema)
})
    .catch(() => {
        let err = new Error("Could not connect to mtpCalculator Collection in Database");
        err.status = 500;
        throw err;

    })
}

module.exports = collection;