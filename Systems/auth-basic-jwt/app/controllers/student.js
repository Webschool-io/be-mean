"use strict";
let sanitize = require("mongo-sanitize");
module.exports = function(app){

  let controller = {};
  let Student = app.models.student;



  controller.saveStudent = function(req, res){
    console.log(req.body);
    let datas = {
      "name": req.body.name,
      "surname": req.body.surname,
      "address":  {
        "street": req.body.address.street,
        "district": req.body.address.district,
        "city": req.body.address.city,
        "state": req.body.address.state,
        "telephone": req.body.address.telephone
      }
    }
    let _id = req.body._id;
    if(_id){
      Student.findByIdAndUpdate(_id, datas).exec()
        .then(
            function(data){
              res.json(data);
            }
            , function(err){
              console.log(err);
              res.status(500).json(err);
            });
    }
    else{
      Student.create(datas)
        .then(
            function(data){
              res.status(201).json(data);
            }
            , function(err){
              res.status(500).json(err);
            });
    }
  };


  controller.findOneStudent = function(req, res){
    let _id = req.params.id;
    Student.findById(_id).exec()
      .then(
          function(data){
            res.json(data);
          }
          , function(err){
            console.log("RESTFUL ERROR => ", err);
            res.status(404).json(err);
          });

  };

  controller.findAllStudents = function(req, res){
    Student.find().populate("users").exec()
      .then(
          function(data){
            res.json(data);
          }
          , function(err){
            res.status(500).json(err);
          })

  };

  controller.removeStudent = function(req, res){
    //sanitize is used to avoid the query selector injection
    //like {$ne: null} that make the delete of the all dates of the student collection
    let _id = sanitize(req.params.id);
    Student.remove({"_id": _id}).exec()
      .then(
          function(data){
            res.end();
          }
          , function(err){
            console.log(err);
          });
  };

  return controller;
}
