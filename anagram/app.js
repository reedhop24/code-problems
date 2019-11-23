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

module.exports = anagram;