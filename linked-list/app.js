'use-strict'

class LinkedList {
    constructor(value){
        this.value = null;
        this.length = 0;
        this.addToHead(value);
    }

    addToHead(value){
        var newNode = { value };
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
}

const list = new LinkedList('first')
    .addToHead('second')
    .addToHead('third')
    .addToHead('fourth');
    
    console.log(list.removeHead());


    
   