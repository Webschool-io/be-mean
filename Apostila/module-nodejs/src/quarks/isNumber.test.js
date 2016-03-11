'use strict';

const valueTRUE = 1;
const valueFALSE = 'a';

const validateTRUE = require('./isNumber')(valueTRUE);
const validateFALSE = require('./isNumber')(valueFALSE);

console.log(valueTRUE+' is Number?', validateTRUE);
console.log(valueFALSE+' is Number?', validateFALSE);