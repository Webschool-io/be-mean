'use strict'

require('./../fields/config.fields');

const FIELD_NAME = 'password';

let should = require('chai').should();
let ch =  require('charlatan');
let Field = require('./../fields/'+ FIELD_NAME +'.field');

describe('Teste do campo '+ FIELD_NAME,() => {
  describe('Teste de validação correta do '+ FIELD_NAME, done => {

    let field = {};
    field[FIELD_NAME] = ch.Internet.password(8);
    let validate = Field[FIELD_NAME].validate.validator(field[FIELD_NAME]);

    it('Precisa validar '+ FIELD_NAME +' correto com valor: '+ field[FIELD_NAME], done => {
      validate.should.be.exist;
      validate.should.be.a('Boolean');
      validate.should.be.eql(true);
      done();
    });
  });

  describe('Teste de validação incorreta do '+ FIELD_NAME, done => {

    let field = {};
    field[FIELD_NAME] = 'abcde';
    let validate = Field[FIELD_NAME].validate.validator(field[FIELD_NAME]);

    it('Precisa invalidar '+ FIELD_NAME +' com valor: '+ field[FIELD_NAME], done => {
      validate.should.be.exist;
      validate.should.be.a('Boolean');
      validate.should.be.eql(false);
      done();
    });
  });


});
