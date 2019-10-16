'use-strict';

palindrome = str => {
    var arr = str.replace(/[^a-z0-9]/gi,'').split('');
    var reverse = str.replace(/[^a-z0-9]/gi,'').split('');
    reverse.reverse();
    
    if(arr.join('') === reverse.join('')){
        return true;
    }
    else {
        return false;
    }
}


// Should return true
console.log(palindrome('madam'));

// Should return true
console.log(palindrome('nurses run'));

// Should return false 
console.log(palindrome('fugazi'));

// Should return false
console.log(palindrome('reed'));