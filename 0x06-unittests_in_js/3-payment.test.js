const sinon = require('sinon');
const chai =  require('chai');
const sendPaymentRequestToApi = require("/3-payment");
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('calls Utils.calculateNumber with SUM type and 100, 20 as arguments', () => {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    expect(calculateNumberSpy.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(calculateNumberSpy.calculateNumber.calledOnce).to.be.true;
    calculateNumberSpy.calculateNumber.restore();
  });
});
