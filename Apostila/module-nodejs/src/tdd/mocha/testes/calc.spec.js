'use strict';

const assert = require("assert");
const Calc =  require('../models/calc');

describe('Calc test',  () => {

	describe('Calc sum testing',  () => {
		it('Calc sum function return sum of 2 values', () => {
			let sum = Calc.sum(5,5);
			assert.equal(10, sum);
		});
	});

	describe('Calc sub testing',  () => {
		it('Calc sub return sub of 2 values', () => {
			let sub = Calc.sub(4,5);
			assert.equal(-1, sub);
		});
	});

	describe('Calc mult testing',  () => {
		it('Calc mult return mult of 2 values', () => {
			let mult = Calc.mult(4,5);
			assert.equal(20, mult);
		});
	});

	describe('Calc div testing',  () => {
		it('Calc div return div of 2 values', () => {
			let div = Calc.div(15,3);
			assert.equal(5, div);
		});

		it('Calc div cant resolve div by 0', () => {
			assert.throws(
				function(){
					Calc.div(1,0);
				},Error 
			);

		});
	});
});
