"use strict";
let app = require("../../config/express")(app)
, should = require("should")
, request = require("supertest")(app);

describe("Routing", function(){
  describe("GET /students", function(){
    it("should return status 401 when makes get at /students without authentication", function(done){
      request.get("/students")
        .expect(401)
        .end(function(err, res){
          if (err) throw err;
          res.status.should.eql(401);
        });

      done();
    });

  });

  describe("GET /users", function(){
    it("should return status 200 when makes get at /users", function(done){
      request.get("/users")
        .expect(200)
        .end(function(err, res){
          if(err) throw err;
          res.status.should.eql(200);
        });
      done();
    });
  });

  describe("POST /login", function(){

    it("should return status 200, with a token", function(done){
      let data = {
        "username":"caiocutrim",
        "password":"02589874rock"
      };
      request.post("/login", data)
        .end(function(res, err){
          if(err) throw err;
          res.status.should.eql(200);
        });
      done();
    });
  });
});

