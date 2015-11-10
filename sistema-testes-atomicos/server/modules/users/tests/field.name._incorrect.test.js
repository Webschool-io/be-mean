'use strict';

let should = require('chai').should();
let ch =  require('charlatan');
let Incorrect = function(Suite) {

  describe('Teste de validação incorreta do '+ Suite.FIELD_NAME, done => {
    // nao aceita email como nome
    let fieldVal = ch.Internet.email(ch.Name.name());;
    let TestIncorrect = require('./field._incorrect.test')(Suite, fieldVal);
    TestIncorrect();
  });
}

module.exports = Incorrect;