'use strict';

let sum  = (a,b) => a+b;
let sub  = (a,b) => a-b;
let mult = (a,b) => a*b;
let div  = (a,b) => a === 0 || b === 0 ? 0 : a / b;
let sqtr = a => Math.sqrt(a);


module.exports = {
	sum  : sum,
	sub  : sub,
	mult : mult,
	div  : div,
	sqtr : sqtr
};

