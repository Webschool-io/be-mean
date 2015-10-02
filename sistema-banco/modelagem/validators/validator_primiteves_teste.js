'use strict';

let validator = require('./validator_primitives');
let should = require('chai').should();
let ch =  require('charlatan');


describe('validator testing', ()=>{
	
	
	it('should be a validator type for string', () => {
		var string = ch.Name.name();
		validator('string' ,string).should.be.true;
	});

	it('should be a validator type for Number', () => {
		var number = 2;
		validator('number' ,number).should.be.true;
	});

	it('should be return false if  validator type null and undefined', () => {
		var unf;
		var nullabe = null;
		validator('null' ,nullabe).should.be.false;
		validator('undefined' ,unf).should.be.false;
	});

});
