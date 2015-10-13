'use strict';

let Model = require('./user_model');
let should = require('chai').should();
let ch =  require('charlatan');


describe('model testing', ()=>{
	
	let invalidBody = {
		name : ch.Name.firstName(),
		email : 'amor@aaa.a.a.a.',
		password : ''
	}
	
	let validBody = {
		name : ch.Name.firstName(),
		email : ch.Internet.email(ch.Name.name()),
		password : ch.Number.number(6)
	};

	
	it('should be model with email and password invalid cant be created', done => {
		Model.create(invalidBody,(err , res) => {
			err.should.be.exist;		
			done();
		});
	});

	it('should be  model with valid schema can be created ', done => {
		Model.create(validBody,(err , res) => {
			res.should.be.exist;		
			res.should.be.a('object');		
			res.created_at.should.exist;		
			done();
		});
	});

});
