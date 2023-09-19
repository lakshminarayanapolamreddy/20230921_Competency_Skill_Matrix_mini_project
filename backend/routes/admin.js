var express = require('express');
var router = express.Router();

var adminTrainingDetails=require("../model/controller/TrainingDetails_controller")
var getTrainingDetails=require("../model/controller/getTrainingDetails")
var editdetails=require("../model/controller/editTraining")
var deletedetails=require('../model/controller/deleteTraining')

router.get("/",getTrainingDetails.getTrianing_details);
router.post("/TrainingDetailsAdmin",adminTrainingDetails.Traning_details);
router.patch("/EditTrainingDetailsAdmin/:id",editdetails.edittraining);
router.delete("/DeleteTrainingDetailsAdmin/:id",deletedetails.deletetraining);


module.exports = router;

