'use strict';

//The below code takes in an iteger and iteratively finds the(iterative value associated with the integer.

function iterative(n){
  var x = 1;
  var y = 1;
  var sum = 1;
  var count = 0;
  if(n < 2){
    return x;
  }
  while (count < n - 2){
    sum = x + y;
    x = y;
    y = sum;
    count++;
  }
  return sum;
}

module.exports = iterative;

// //should return 2
// console.log(iterative(3));

// //should return 13
// console.log(iterative(7));

// //should return 233
// console.log(iterative(13));

// //should return 377
// console.log(iterative(14));
