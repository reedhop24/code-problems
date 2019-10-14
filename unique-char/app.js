'use strict'

var unique = str => {
    var unique = ([...new Set(str)]);
    if (unique.join('') === str) {
        return true;
    } else {
        return false;
    }
}

// Should return true
console.log(unique('lmnop'));

// Should return false
console.log(unique('reed'));

// Should return true
console.log(unique('uncopyrightable'));

// Should return false
console.log(unique('uncopyrightably'));