'use strict';

function recursive(n){
  if(n <= 2) {
    return 1;
  }
  else{
    return recursive(n - 1) + recursive(n - 2);
  }
}

module.exports = recursive;

// //should return 2
// console.log(recursive(3));

// //should return 13
// console.log(recursive(7));

// //should return 233
// console.log(recursive(13));

// //should return 377
// console.log(recursive(14));