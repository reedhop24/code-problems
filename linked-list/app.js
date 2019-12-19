'use-strict'

class linkedlist{
    constructor(value){
        this.head = null;
        this.length = 0;
        this.addToHead(value);
    }

    addToHead(value){
        let current = {value};
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

var list = new linkedlist('third')
    .addToHead('second')
    .addToHead('second')
    .addToHead('third');
