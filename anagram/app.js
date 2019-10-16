'use strict'

function anagram(str, compare) {
    var strArr = str.split('').sort();
    var compareArr = compare.split('').sort();
    if(strArr.length === compareArr.length) {
        for(var i = 0; i < strArr.length; i++){
            if(strArr[i] !== compareArr[i]) {
                return false;
            }
        }
        return true;
    }
    else {
        return false;
    }
}

// should return true
console.log(anagram('listen', 'silent'));

// should return true
console.log(anagram('reed', 'deer'));

// should return false
console.log(anagram('false', 'true'));

// should return false 
console.log(anagram('false', 'flalse')); 