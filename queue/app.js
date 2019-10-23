'use-strict'

class Queue {
    constructor(){
        this.queue = [];
    }

    // Move elements into the array
    push(element){
        this.queue.push(element);
    }

    // Empty the first element of the array and return it
    dequeue(){
        if(this.isEmpty() === true){
            return 'Queue is empty';
        }
        else{
            return this.queue.shift();
        }
    }

    // Return the first element of the array without emptying it
    peek(){
        if(this.isEmpty() === true){
            return 'Queue is empty';
        }
        else{
            return this.queue[0];
        }
    }

    // Check if empty
    isEmpty(){
        if(this.queue.length === 0){
            return true;
        }
        else{
            return false;
        }
    }
}

var newQueue = new Queue;
newQueue.queue = [1,2,3,4,5,6];

newQueue.push(7);
console.log(newQueue.dequeue());
console.log(newQueue.peek());