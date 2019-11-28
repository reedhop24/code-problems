'use strict';

class LinkedList {
  constructor(value){
    this.head = null;
    this.length = 0;
    this.addToHead(value);
  }

  addToHead(value){
    var newNode = {value,};
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  removeHead(){
    if(this.length === 0){
      return undefined;
    }
    const value = this.head;
    this.head = this.head.next;
    this.length--;
    return value;
  }

  reverseLinkedList(){
    if(!this.head || !this.head.next){
      console.log('List is empty');
      return;
    }
    var p1 = null;
    var p2 = this.head;
    var p3;
    while(p2){
      p3 = p2.next;
      p2.next = p1;
      p1 = p2;
      p2 = p3;
    }
    this.head = p1;
    return this;
  }
}


const list = new LinkedList('d')
  .addToHead('e')
  .addToHead('e')
  .addToHead('r');
list.reverseLinkedList();
console.log(list);





