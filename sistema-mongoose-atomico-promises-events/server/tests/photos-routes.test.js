'use strict'

let should = require('chai').should();
let ch =  require('charlatan');
let request =  require('superagent');
let url = require('url');
const ABS_URL = "http://localhost:3000/api/photos";

describe('photos routes testing', () => {
	let id = null
		, photo = {	
				legend : ch.Lorem.words({wordCount : 5, supplemental : false})
		}
		;

	it('it should be an user create one photo' , done => {
		request
			.post(url.resolve(ABS_URL, 'photos'))
			.send(photo)
			.end((err, res) => {
				res.should.be.exist;
				res.body._id.should.exist;
				id = res.body_id;
				res.status.should.be.eql(201);
				done();
			});
	});
});

