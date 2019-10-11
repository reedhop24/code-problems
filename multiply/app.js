'use strict'

function multiply(multiplier, multiply){
    var increment = 0;
    var count = 0;
    while(count < multiply){
        count++;
        increment += multiplier;
    }2
    return increment;
}

//should return 10
console.log(multiply(2,5));

//should return 10
console.log(multiply(5, 2));

//should return 81
console.log(multiply(9,9));

//should return 120
console.log(multiply(10, 12));