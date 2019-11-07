'use-strict'

class linkedlist{
    constructor(value){
        this.head = null;
        this.length = 0;
        this.addToHead(value);
    }

    addToHead(value){
        let newNode = {value};
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    removeHead(){
        if(this.length === 0){
            return undefined;
        }
        let value = this.head;
        this.head = this.head.next;
        this.length--;
        return value;
    }
}

var list = new linkedlist('first')
    .addToHead('second')
    .addToHead('third')
    .addToHead('fourth');

    console.log(list);
