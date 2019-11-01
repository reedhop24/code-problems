'use strict'
class linkedlist {
    constructor(value){
        this.head = null;
        this.length = 0;
        this.addToHead(value);
    }
    addToHead(value){
        var newNode = {value};
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    removeHead(){
        if(this.length === 0){
            return undefined;
        }
        var value = this.head;
        this.head = this.head.next;
        this.length--;
        return value;
    }
}

// Save beginning of the loop as a null value
var beginning = null;

var isLoop = function(linkedlist) {
    let tortoise = linkedlist;
    let hare = linkedlist;
    while(tortoise && tortoise.next){
        tortoise = tortoise.next;
        hare = hare.next.next;
        // If loop is detected
        if(tortoise === hare){
            // Define beginning as the beginning of the loop
            beginning = tortoise;
            return true;
        }
    }
    return false;
}

var list = new linkedlist('first')
    .addToHead('second')
    .addToHead('third')
    .addToHead('fourth');

console.log(isLoop(list));
console.log(beginning);

// Test for loop
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

const nodeA = new Node('A');
const nodeB = nodeA.next = new Node('B');
const nodeC = nodeB.next = new Node('C');
const nodeD = nodeC.next = new Node('D');
const nodeE = nodeD.next = new Node('E');

nodeE.next = nodeB;

console.log(isLoop(nodeA));
console.log(beginning);
