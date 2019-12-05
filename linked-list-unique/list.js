/* eslint-disable indent */
'use strict';

class LinkedList{
  constructor(value){
    this.head = null;
    this.length = 0;
    this.addToHead(value);
  }

  addToHead(value){
    let current = {value,};
    current.next = this.head;
    this.head = current;
    this.length++;
    return this;
  }

  removeHead(){
    if(this.length === 0){
      return undefined;
    }
    let current = this.head;
    this.head = this.head.next;
    this.length--;
    return current;
  }
}

var list = new LinkedList(1)
  .addToHead(1)
  .addToHead(2);

  console.log(list);
var hashMap = new Map();

function allUnique(a){
    let current = a.head;
    var unique = new LinkedList(current.value);
    hashMap.set(current.value);
    while(current.next){
        if(!hashMap.has(current.value)){
            unique.addToHead(current.value);
        }
        hashMap.set(current.value);
        current = current.next;
    }
    return unique;
}

console.log(allUnique(list));
