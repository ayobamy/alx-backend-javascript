const Utils = require("./util");

sendPaymentRequestToApi((totalAmount, totalShipping) => {
  const sumValue = Utils.calculateNumber('SUM', totalAmount, totalShipping);

  console.log(`The total is: ${sumValue}`);
});

module.exports = sendPaymentRequestToApi;
