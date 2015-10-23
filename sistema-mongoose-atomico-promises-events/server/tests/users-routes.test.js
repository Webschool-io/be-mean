'use strict'

let should = require('chai').should();
let ch =  require('charlatan');
let request =  require('superagent');
let url = require('url');
const ABS_URL = "http://localhost:3000/api/users";

describe('testing of api /users routes',() => {
	let id = null;
	let user = {
		name : ch.Name.firstName(),
		email : ch.Internet.email(ch.Name.name()),
		password : ch.Number.number(8)
	};

	it('should be create one user', done => {
		 request
      .post(url.resolve(ABS_URL,'users'))
      .send(user)
      .end((err , res) => {
        res.should.be.exist;
        res.body._id.should.exist;
        id = res.body._id;
        res.status.should.be.eql(201);
        done();
      });
	});
	
	it('should be get retrive all users', done => {
		 request
      .get(url.resolve(ABS_URL,'users'))
			.end((err, res) => {
				res.should.be.exist;	
        res.status.should.be.eql(200);
				res.body.should.be.an("Array");
				done();
			});
	});

	it('should be update user by id', done => {
		let user = {
			name : ch.Name.firstName(),
			email : ch.Internet.email(ch.Name.name()),
			password : ch.Number.number(8)
		};

		request
      .put(url.resolve(ABS_URL,'users/'+id))
			.send(user)
			.end((err, res) => {
				res.should.be.exist;	
        res.status.should.be.eql(202);
				done();
			});
	});

	it('should be delete user by id', done => {
		request
      .del(url.resolve(ABS_URL,'users/'+id))
			.end((err, res) => {
				res.should.be.exist;	
        res.status.should.be.eql(204);
				done();
			});
	});

});
