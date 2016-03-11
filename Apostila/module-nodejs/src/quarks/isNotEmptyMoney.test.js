'use strict';

const valueTRUE = 1;
const valueFALSE = "a";

const validateTRUE = require('./isNotEmptyMoney')(valueTRUE);
const validateFALSE = require('./isNotEmptyMoney')(valueFALSE);

console.log(valueTRUE+' is NotEmptyMoney?', validateTRUE);
console.log(valueFALSE+' is NotEmptyMoney?', validateFALSE);