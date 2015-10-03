'use strict'

require('./../fields/config.fields');

const FIELD_NAME = 'email';

let Suite = {
  FIELD_NAME: FIELD_NAME
, Field: require('./../fields/'+ FIELD_NAME +'.field')
};

describe('Teste do campo '+ FIELD_NAME,() => {
  require('./field.'+ FIELD_NAME +'._correct.test')(Suite);
  require('./field.'+ FIELD_NAME +'._incorrect.test')(Suite);
});
