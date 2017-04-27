'use strict';

const expect = require('chai').expect;

module.exports = (testName, describes) => {

  const test = (values, valueToTest) => {
    values.forEach( (element, index) => {
      it('testando: '+element, () => {
        expect(require('./'+testName)(element)).to.equal(valueToTest);
      });
    });
  };

  describe(testName, () => {
    describes.forEach( (element, index) => {
      describe(element.message,  () => {
        test(element.values, element.type);
      });
    });
  });
};


