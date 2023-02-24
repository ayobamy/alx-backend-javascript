const chai = require("chai");
const expect = chai.expect;

const calculateNumber = require("./2-calcul_chai");

describe("calculateNumber", function () {
  describe("ADDITION", function () {
    it("should return 6 = 1.4 + 4.5", function () {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6)
    });
  });
  
  describe('SUBTRACTION', function () {
    it("should return -4 = 1.4 - 4.5", function () {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    })
  });

  describe('DIVISION', function () {
    it("should return 0.2 = 1.4 / 4.5", function () {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    })
  });

  describe('DIVISION', function () {
    it("should return Error =  1.4 / 0", function () {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    })
  });
});
