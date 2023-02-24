function calculateNumber(type, a, b) {
  roundA = Math.round(a);
  roundB = Math.round(b);
  
  switch(type) {
    case 'SUM':
      return roundA + roundB;
    case 'SUBTRACT':
      return roundA - roundB;
    case 'DIVIDE':
      if (roundB === 0) {
        return 'Error';
      }
      return roundA / roundB;
    default:
      return 'Error';
  }
  // if (type == 'SUM') {
  //   return roundA + roundB;
  // } 
  // if (type == 'SUBTRACT') {
  //   return roundA - roundB;
  // } 
  // if (type == 'DIVIDE') {
  //   if (roundB == 0) {
  //     return('Error');
  //   } else {
  //     return roundA / roundB;
  //   }
  // }
}

module.exports = calculateNumber;
