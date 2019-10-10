'use strict';

function nonRepeat (str) {
    // loop through string
    for(var i = 0; i < str.length; i++) {
        var count = 0;
        // iterate each character against the others if the character does not match add to count
        for(var j = 0; j < str.length; j++){
            if(str[i].match(/^[a-zA-Z]+$/)){
                if(str[i] !== str[j]){
                    count++;
                }
            }
        }
        // if count = length - 1 this means the character only had one match being itself
        if(count === str.length - 1){
            return str[i];
        }
    }
}

// should return 'h'
console.log(nonRepeat('hello'));

// should return 'c'
console.log(nonRepeat('abacadabra'));

// should return 'a'
console.log(nonRepeat('foo far'));