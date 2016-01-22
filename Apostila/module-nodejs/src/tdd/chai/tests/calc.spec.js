'use strict';

const expect = require('chai').expect;
const calc = require('../models/calc');

describe('calc', function() {
	describe('calc testing',  () => {
		it('sum of two number',  () => {
			expect(calc.sum(1,1)).to.equal(2);
		});

		it('sub of two number',  () => {
			expect(calc.sub(2,5)).to.equal(-3);
		});

		it('mult of two number',  () => {
			expect(calc.mult(5,5)).to.equal(25);
		});

		it('div of two number',  () => {
			expect(calc.div(15,5)).to.equal(3);
		});

		it('div of two number dont aceept div by zero',  () => {
			expect(calc.div(15,0)).to.equal(0);
			expect(calc.div(0,1)).to.equal(0);
		});

		it('sqtr of a number',  () => {
			expect(calc.sqtr(9)).to.equal(3);
		});
	});
});
