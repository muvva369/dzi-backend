const express = require('express');
const router = express.Router();
const service = require('./service.js');
const model = require('./model.js');
const create = require('./dbsetup.js');
var bodyParser = require('body-parser');
router.use(bodyParser.json());



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