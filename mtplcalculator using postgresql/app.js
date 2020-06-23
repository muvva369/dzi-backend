const express= require('express');
const app=express();
const bodyparser=require('body-parser');
const mm=require('./model')
const router=require('./routing')
const errorLogger = require('./utilities/ErrorLogger');
const requestLogger = require('./utilities/RequestLogger');
const cors = require("cors");

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cors());

app.use(requestLogger);
app.use('/', router);
app.use(errorLogger);



app.listen(3000,()=>{
    console.log("server started at port 3000");
    
});