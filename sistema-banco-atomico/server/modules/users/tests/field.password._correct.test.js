'use strict';


let should = require('chai').should();
let ch =  require('charlatan');
let Correct = function(Suite) {

  describe('Teste de validação correta do '+ Suite.FIELD_NAME, done => {

    let fieldVal = ch.Internet.password();
    let TestCorrect = require('./field._correct.test')(Suite, fieldVal);
    TestCorrect();
  });
}

module.exports = Correct;