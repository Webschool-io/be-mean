'use strict';

let should = require('chai').should();
let ch =  require('charlatan');
let Incorrect = function(Suite) {

  describe('Teste de validação incorreta do '+ Suite.FIELD_NAME, done => {

    let fieldVal = 'qquer';
    let TestIncorrect = require('./field._incorrect.test')(Suite, fieldVal);
    TestIncorrect();
  });
}

module.exports = Incorrect;