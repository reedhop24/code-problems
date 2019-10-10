'use-strict';

var score = str => {
    var arr = str.split(" ");
    var numbers = {'nil' : 0, 'one' : 1, 'two' : 2, 'three' : 3, 'four' : 4, 'five' : 5, 'six' : 6, 'seven' : 7, 'eight' : 8, 'nine' : 9};
    var score = [];
    for(var i = 0, len = arr.length; i < len; i++ ) {
        if(arr[i] in numbers){
            score.push(parseInt(numbers[arr[i]]));
        }
    }
    return(score.join(":"));
}

//should return 2:3
console.log(score('new score: two three'));

//should return 8:5
console.log(score('eight to five'));

//should return 9:0
console.log(score('Goal! New score nine to nil'))