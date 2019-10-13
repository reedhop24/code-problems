'use strict'

function firstPrime(x){
    function isPrime(n){
        for(var i = 2; i < n; i++){
            if(n % i == 0){
                return false;
            }
        }
        return true;
    }
    var count = 0;
    for(var i = 2; count < x; i++) {
        if(isPrime(i) == true){
            count++;
        }
    }
    return i-1;
}

// Should return 7
console.log(firstPrime(4));

// Should return 13
console.log(firstPrime(6));

// Should return 11
console.log(firstPrime(5));

// Should return 59
console.log(firstPrime(17));