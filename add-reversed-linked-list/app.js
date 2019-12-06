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
}

var list = new LinkedList(3)
    .addToHead(4)
    .addToHead(2)
    .addToHead(4)
    .addToHead(2)
    .addToHead(4)
    .addToHead(2)
    .addToHead(4)
    .addToHead(2);

var list2 = new LinkedList(4)
    .addToHead(6)
    .addToHead(5)
    .addToHead(6)
    .addToHead(5)
    .addToHead(6)
    .addToHead(5)
    .addToHead(6)
    .addToHead(5);

var addTwoNumbers = function(l1, l2) {
    var reverseList = function(list) {
        if(!list.head || !list.head.next){
            return undefined;
        }
        let p1 = null;
        let p2 = list.head;
        let p3;
        while(p2){
            p3 = p2.next;
            p2.next = p1;
            p1 = p2;
            p2 = p3;
        }
        list.head = p1;
        return list;
    };

    reverseList(l1);
    reverseList(l2);

    var addVals = function(list) {
        let add = '';
        let current = list.head;
        while(current) {
            add += current.value;
            current = current.next;
        }
        return add;
    };

    return parseInt(addVals(l1)) + parseInt(addVals(l2));
};

console.log(addTwoNumbers(list, list2));


