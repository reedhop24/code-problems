class Stack {
    constructor() {
      this.stack = []
    }
    
    // Inserts the element into the top of the stack
    push(element) {
      this.stack.push(element)
    }
    
    // Removes the element from the top of the stack and return that element
    pop() {
      if (this.isEmpty() === true) {
        return 'Stack is empty!' ;
      } else {
        return this.stack.pop();
      }
    }
    
    // helper method
     isEmpty() {
        return !this.queue.length
    }
  }

 var newStack = new Stack;

 newStack = [];
 console.log(newStack.isEmpty());
 newStack.push(69);
 console.log(newStack);
 newStack.pop();
 console.log(newStack);

 


