'use strict';

var plusOne = function(digits) {
  let int = BigInt(digits.join(''));
  int += BigInt(1);
  return int.toString().split('').map((x) => {return parseInt(x);});
};

console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));
