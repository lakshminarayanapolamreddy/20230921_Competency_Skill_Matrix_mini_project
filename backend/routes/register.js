var express = require('express');
var router = express.Router();
//controller is for applying business logic
//here we are taking the insert logic from controller and save in varaible admin
var UserRegistration=require("../model/controller/signup_controller")

/* GET users listing. */

//while api calls this the particular action happens in the database eg. here we are inserting records
router.post('/',UserRegistration.create_user);

module.exports = router;