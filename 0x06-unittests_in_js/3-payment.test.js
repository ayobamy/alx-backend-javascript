const sinon = require('sinon');
const sendPaymentRequestToApi = require("/3-payment");
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('calls Utils.calculateNumber with SUM type and 100, 20 as arguments', () => {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledOnce(calculateNumberSpy);
    sinon.assert.calledWithExactly(calculateNumberSpy, 'SUM', 100, 20);
    calculateNumberSpy.restore();
  });
});
