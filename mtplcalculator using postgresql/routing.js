const express = require('express');
const router = express.Router();
const service=require('./service')
const create = require('./utilities/dbsetup');

router.get('/setupDb', (req, res, next) => {
    create.setupDb().then((data) => {
        res.send(data)
    }).catch((err) => {
        next(err)
    })
})

router.get('/details/:regno',(req, res, next)=>{
    console.log("its working ...")
    let regno=req.params.regno;
    service.getdetailbyregno(regno).then(data=>{
        res.json(data)
    }).catch((err) => next(err));
});

router.post('/add',(req, res, next)=>{
    const data=req.body;
    console.log("inside post.. ...")
    service.adddetails(data).then(data=>{
        res.json(data)
    }).catch((err) => next(err));
});

module.exports = router;