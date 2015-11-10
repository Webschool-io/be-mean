'use strict';

const map = new Map();

function validator(type , value) {
	
	if(type === 'string' && typeof value == 'string') return true;
	else if(type === 'number' && typeof value == 'number') return true;
	else if(value === 'function') return false;
	else if(value === 'object') return false;
	else if(value === 'null') return true;
	return  false;
}

module.exports =  validator;

