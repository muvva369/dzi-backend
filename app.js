const express = require('express');
const bodyParser = require('body-parser');
const Router = require('./routing');

const errorLogger = require('./utilities/ErrorLogger');
const requestLogger = require('./utilities/RequestLogger.js');
const cors = require("cors");
const app = express();
app.use(cors());

app.listen(3000, () => {
    console.log('listening on 3000');
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.post('/purchasePolicy', bodyParser.json(), psql.createPolicy);

app.use(requestLogger);
app.use('/', Router);
app.use(errorLogger);

module.exports = app;