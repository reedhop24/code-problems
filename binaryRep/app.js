'use-strict';

var toBinary = int => {
    return int.toString(2);
}

// Should return 110100
console.log(toBinary(52));

// Should return 10110100
console.log(toBinary(180));