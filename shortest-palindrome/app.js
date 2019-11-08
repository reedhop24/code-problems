'use-strict';

var shortestPalindrome = str => {
    let arr = [];
    for(var i = 0; i < str.length; i++){
        let palindrome = str[i];
        for(var j = i+1; j < str.length; j++){
            palindrome += str[j];
            console.log(palindrome);
            if(palindrome === palindrome.split('').reverse().join('')){
                arr.push(palindrome);
            }
        }
    }
    console.log(arr.sort((a,b) => {return a.length - b.length}));
    console.log(arr);
    return arr[0];
}

// Should return cec
console.log(shortestPalindrome('I love racecar'));

// Should return aa
console.log(shortestPalindrome('racecar baab'));
