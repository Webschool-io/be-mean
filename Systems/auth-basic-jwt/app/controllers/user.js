'use strict';

const sanitize = require("mongo-sanitize");
module.exports = function(app) {
  let User = app.models.users
    , controller  =  {};

  controller.saveUser = function(req,res) {
    let data = {
      "username": req.body.username,
      "name": req.body.name,
      "password": req.body.password
    };
    if(req.body._id) {
      User.findByIdAndUpdate(req.body._id, data).exec()
      .then(function(data) {
        res.status(201).json(data);
      }, function(err) {
        res.status(404).json(err);
      }).done();

    }
    else {
      User.create(data)
      .then(function(data) {
        res.json(data);
      }, function(err) {
        console.log(err);
        res.status(500).json(err);
      });
    }

  };

  controller.findOneUser = function(req, res) {
    User.findById(req.body_id).exec()
    .then(function(data) {
       res.json(data);
    }, function(err) {
      console.log(err);
      res.status(500).json(err);
    });
  };

  controller.findAllUsers = function(req, res) {
    User.find().exec()
    .then(function(data) {
      res.json(data);
    }, function(err) {
      res.status(500).json(err);
    });
  };

  controller.removeUser = function(req, res) {
    User.remove(sanitize({"_id":req.body._id})).exec()
    .then(function() {
       res.end();
    }, function(err) {
      console.log(err);
      res.status(500).json(err);
    });
  };

  return controller;
};
