******** Steps *********

1) Create a DATABASE named "insurance" in postgresql database.
2) Create a table named "mtplcollection" with the following coloumns :

          *) registrationNumber  (UNIQUE CONSTRAINT,DATATYPE:NUMERIC LENGTH:10)
          *) certificateNumber  (UNIQUE CONSTRAINT,DATATYPE:NUMERIC LENGTH:8)
          *) purpose  (DATATYPE:CHARACTER VARYING)
          *) outsideBulgarianTerritory  (DATATYPE:CHARACTER VARYING)
          *) egn  (UNIQUE CONSTRAINT)
          *) permanentResidence  (DATATYPE:CHARACTER VARYING)
          *) email  (DATATYPE:CHARACTER VARYING)
          *) startDate  (DATATYPE:DATE)
          *) policyLength  (DATATYPE:CHARACTER VARYING)
          *) type  (DATATYPE:CHARACTER VARYING)
          *) period  (DATATYPE:CHARACTER VARYING)
          *) price  (DATATYPE:NUMERIC)
          *) addtype  (DATATYPE:CHARACTER VARYING)
          *) addprice  (DATATYPE:NUMERIC)
 
 3) Run the codes by executing the command "node app.js" in VS Code         
 4) To setup the DB, load http://localhost:3000/setupDb
 5) To make a post request ,load http://localhost:3000/add after populating the body with the folowing sample data :
 
        { "vehicleInfo": {
        "registrationNumber": "QS16CD9864",
        "certificateNumber": 59543962,
        "purpose": "personal use",
        "outsideBulgarianTerritory": "no"
        },
        "insuringParty": {
        "egn": 5545688987,
        "permanentResidence": "mnb,lkj street, mumbai",
        "email": "mnb@gmail.com"
        },
        "policy": { "startDate": "2019-05-30T00:00:00.000Z", "policyLength": "12 months" },
        "installment": { "type": "four", "period": "12 months", "price": 26455 },
        "additionalCover": { "type": "VIP", "price": 5960 }
        }
        
6) To make a get request, load http://localhost:3000/details/TS16AB1234 
      (* TS16AB1234 is the vehicle registration number )
