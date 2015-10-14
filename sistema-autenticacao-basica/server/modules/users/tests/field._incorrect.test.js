'use strict';

let should = require('chai').should();
let ch =  require('charlatan');
let Incorrect = function(Suite, fieldVal) {

 return function () {
  it('Precisa INvalidar '+ Suite.FIELD_NAME +' com o valor: '+ fieldVal, done => {

    let validate = Suite.Field[Suite.FIELD_NAME]
                    .validate
                    .validator(fieldVal);
    console.log('fieldVal', fieldVal);
    console.log('validate', validate);
    validate.should.be.exist;
    validate.should.be.a('Boolean');
    validate.should.be.eql(false);
    done();
  });
 }
}

module.exports = Incorrect;