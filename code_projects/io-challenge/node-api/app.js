
'use strict';


require("babel/register");

const dotenv      = require('dotenv').load();
const mongoose    = require('mongoose');
const express     = require("express");
const bodyParser  = require("body-parser");
const app         = express();

const PORT = process.env.PORT || 8080

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect(process.env.MONGO_DB)
.then(()=> console.log("Conected DB ✅"))
.catch((err) => console.error(err, "Error to connect to DB ❌"))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', '*');
  res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json,x-access-token,multipart/form-data,mul');
  next();
});

require('./app/routes')(app)

app.listen(PORT, ()=>{
    console.log('====================================');
    console.log("App is running on: ", PORT);
    console.log('====================================');
});

exports = module.exports = app;
