const express = require('express');
const router = express.Router();
const service = require('./service.js');
const model = require('./model.js');
const create = require('./dbsetup.js');
var bodyParser = require('body-parser');
router.use(bodyParser.json());


router.get('/setupDb', (req, res, next) => {
    create.setupDb().then((data) => {
        res.send(data)
    }).catch((err) => {
        next(err)
    })
})


// to post details to mtplCalculator collection
router.post('/mtpCalculator', (req, res, next) => {
    let details = req.body;
    service.addmtpDetails(details).then((response) => {
        res.json(response);

    }).catch((err) => next(err))
})


// get details from mtplcalculator collection  by registration no.
router.get('/getdetails/:regno', (req, res, next) => {
    let regNo = req.params.regno;
    service.getDetails(regNo).then((response) => {
        console.log(response);
        res.json(response);
    }).catch((err) => next(err));
})

// to post details to purchasePolicy collection
router.post('/purchasePolicy', (req, res, next) => {
    let details = req.body;
    console.log(details)
    service.addPolicyDetails(details).then((response) => {
        res.json(response);

    }).catch((err) => next(err))
})

router.get('/getPolicy', (res, next) => {
    service.getPolicyDetails().then((response) => {
        console.log(response);
        res.json(response);

    }).catch((err) => next(err))
})

module.exports = router;