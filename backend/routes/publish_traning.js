var express = require('express');
var router = express.Router();
//controller is for applying business logic
//here we are taking the insert logic from controller and save in varaible admin
// var Useradmin=require("../model/controller/UserAdminRegistratons_controller")
var TDetails = require("../model/controller/TrainingDetails_controller")

/* GET users listing. */

//while api calls this the particular action happens in the database eg. here we are inserting records
router.post('/TrainingDetailsAdmin',TDetails.Traning_details);
// router.post('/users',)
// router.post("/TrainingDetailsAdmin",TDetails.Traning_details)
//function(req, res, next) {
//   res.send('respond with a resource');
// }
module.exports = router;
