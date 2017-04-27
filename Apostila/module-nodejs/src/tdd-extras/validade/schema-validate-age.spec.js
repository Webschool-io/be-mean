'use strict';

const  User = require('./schema-validate-age');
const expect = require('chai').expect;


describe('User Validate', () => {
  describe('validate age of users with 18 or more', () => {
    it('age only aceept 18 or more years', () => {
      let u = new User();
      u.age = 24;
      /*jshint expr: true*/
      expect(u.validateSync()).to.be.undefined;
    });
  });

  describe('validade age of users with less year of 18', () => {
    it('age less of  18 not accept', () => {
      let u = new User();
      u.age = 2;
      const validate = u.validateSync();
      expect(validate.message).to.be.eq('user validation failed');
      /*jshint expr: true*/
      expect(validate.errors).to.be.exist;
    });
  });
});
