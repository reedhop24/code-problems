var str = str => {
    var arr = str.split(""); 
    var reversed = arr.reverse(); 
    return reversed.join("");
}

//should return 'olleh'
console.log(str('hello'));

//should return 'deer'
console.log(str('reed'));

//shoul return 'sllab'
console.log(str('balls'));

var iteration = str => {
    var empty = '';
    for(var i = str.length - 1; i >= 0; i--){
        empty += str[i];
    }
    return empty;
}

//should return edoc
console.log(iteration('code'));

//should return yppah
console.log(iteration('happy'));

//should return emil
console.log(iteration('lime'));

var recursive = str => {
    if(str === ''){
        return '';
    }
    else{
        return recursive(str.substr(1)) + str.charAt(0);
    }
}

//should return 'baf'
console.log(recursive('fab'));

//should return 'kcud'
console.log(recursive('duck'));

//shoul return 'pil'
console.log(recursive('lip'));

