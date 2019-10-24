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
       if (typeof(this.stack[0]) === 'string'){
            this.stack.sort((a, b) => {return b.length - a.length});
       }
       else{
            this.stack.sort((a, b) => {return b - a});
       }
      return this.stack.pop();
    }
  }

  peek(){
    if(this.isEmpty() === true) {
      return 'The stack is empty';
    }
    else{
        if (typeof(this.stack[0]) === 'string'){
            return this.stack[this.stack.length - 1];
        }
        else{
             this.stack.sort((a, b) => {return b - a});
        }
       return this.stack.pop();
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

//TESTING FOR INTEGERS

var newStack = new Stack;
newStack.stack = [3,9,17,1,2,7];

// Testing Stack Push
newStack.push(6);
console.log(newStack.stack);

//Testing Stack Pop
console.log(newStack.pop());
console.log(newStack.stack);

//Testing Stack Peek
console.log(newStack.peek());
console.log(newStack.stack);

// Testing Stack Pop With Empty Array
newStack.stack = [];
console.log(newStack.pop());



//TESTING FOR STRINGS

var newStack = new Stack;
newStack.stack = ['a', 'bb', 'cdfg3rt', 'sw3r2', 'dd'];

// Testing Stack Push
newStack.push('jell');
console.log(newStack.stack);

//Testing Stack Pop
console.log(newStack.pop());
console.log(newStack.stack);

//Testing Stack Peek
console.log(newStack.peek());
console.log(newStack.stack);

// Testing Stack Pop With Empty Array
newStack.stack = [];
console.log(newStack.pop());



