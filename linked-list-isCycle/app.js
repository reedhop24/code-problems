'use strict'

class LinkedList {
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
        var value = this.head.value;
        this.head = this.head.next;
        this.length--;
        return value;
    }
}

var isCycle = function (linkedlist){
    var tortoise = linkedlist;
    var hare = linkedlist;
    while(tortoise && tortoise.next){
        tortoise = tortoise.next;
        hare = hare.next.next;
        if(tortoise === hare){
            return true;
        }
    }
    return false;
}

// Test for false value
var list = new LinkedList('first')
    .addToHead('second')
    .addToHead('third')
    .addToHead('fourth');
console.log(isCycle(list));

// Test for true value
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

nodeE.next = nodeB

console.log(isCycle(nodeA));
