'use strict'

require('./../fields/config.fields');

let should = require('chai').should();
let ch =  require('charlatan');

describe('testing of users routes',() => {
	let id = null;
	let user = {
		name : ch.Name.firstName(),
		email : ch.Internet.email(ch.Name.name()),
		password : ch.Number.number(6)
	};
	
	it('should be create one user', done => {
		 request
      .post(url.resolve(ABS_URL,'users'))
      .send(user)
      .end((err , res) => {
        res.should.be.exist;
        res.body.should.be.a('Object');
        res.body._id.should.exist;
        res.status.should.be.eql(201);
        id = res.body._id;
        done();
      });	
	});

});
