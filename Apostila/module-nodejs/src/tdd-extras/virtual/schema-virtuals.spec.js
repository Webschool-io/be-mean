'use strict';

const expect = require('chai').expect;
const Person = require('./schema-virtuals');
const util = require('util');

describe('Testing Virtual', () => {
  const jean = { first: 'Jean', last: 'Suissa' };

  before(done => {
    Person.create({
      name : jean
    }).then(person => {
      util.log(person);
      done();
    });
  });

  after(done => {
    Person.remove({
      name : jean 
    }).then(removed => {
      util.log(removed.result);
      done();
    });
  });

  describe('virtutal give a full name concatend', () => {
    it('expect full.name have a first and last', done => {
      Person.findOne({name : jean}, (err, data) => {
        /*jshint expr: true*/
        expect(err).to.not.exist;
        expect(data.name.full).to.be.eq(jean.first+' '+jean.last);
        done();
      });  
    });
  });
});
