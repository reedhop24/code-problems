'use-strict'

class Stack{
  constructor(){
    this.stack = [];
  }

  push(element){
    this.stack.push(element);
  }

  pop(){
    if(this.isEmpty() === true) {
      return 'The stack is empty';
    }
    else{
      return this.stack.pop();
    }
  }

  peek(){
    if(this.isEmpty() === true) {
      return 'The stack is empty';
    }
    else{
      return this.stack[this.stack.length - 1];
    }
  }

  isEmpty(){
    if(this.stack.length === 0){
      return true;
    }
    else{
      return false;
    }
  }
}


var newStack = new Stack;
newStack.stack = [1,2,3,4,5];

// Testing Stack Push
newStack.push(6);
console.log(newStack.stack);

//Testing Stack Pop

console.log(newStack.pop());
console.log(newStack.stack);
console.log(newStack.peek());
console.log(newStack.stack);
// Testing Stack Pop With Empty Array
newStack.stack = [];
console.log(newStack.pop());
 

 


