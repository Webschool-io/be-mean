'use strict';

module.exports = Calc();

function Calc () {

	return {
		sum : sum,
		sub : sub,
		mult : mult,
		div : div
	};

	function sum(a , b) {
		return  a + b;
	} 

	function sub(a , b)	{
		return a - b;
	}

	function mult(a , b) {
		return a * b;
	}

	function div(a , b) {
		if(b === 0) { throw new Error('cant div firth param by zero'); }
		return a / b;
	}
}
