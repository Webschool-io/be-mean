'use strict';

let should = require('chai').should();
let ch =  require('charlatan');
let Correct = function(Suite, fieldVal) {

 return function () {
  it('Precisa validar '+ Suite.FIELD_NAME +' correto com valor: '+ fieldVal, done => {

    Suite.validate = Suite.Field[Suite.FIELD_NAME]
                    .validate
                    .validator(fieldVal);
    // console.log('Suite.fieldVal', Suite.fieldVal);
    // console.log('Suite.validate', Suite.validate);
    Suite.validate.should.be.exist;
    Suite.validate.should.be.a('Boolean');
    Suite.validate.should.be.eql(true);
    done();
  });
 }
}

module.exports = Correct;