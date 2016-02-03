'use strict';

const User =  require('./schema-setter');
const expect = require('chai').expect;

describe('testing of schema User', () => {
  describe('testing of setter to uppercase', () => {
    it('email only lower case seve in mongo', () => {
      const user = new User({email: 'SUISSERA@webschool.io'});
      expect(user.email).to.be.equal('suissera@webschool.io');
    });
  });
});

