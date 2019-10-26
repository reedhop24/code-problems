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

    findNth(val){
        let thisNode = this.head;
        let len = this.length;
        while(thisNode) {
        if(len === val) {
            return thisNode;
        }
        len--;  
        thisNode = thisNode.next;
    }
    return thisNode;
    }
}

const list = new LinkedList('first')
    .addToHead('second')
    .addToHead('third')
    .addToHead('fourth');
    
    console.log(list.findNth(1));
    console.log(list.findNth(2));
    console.log(list.findNth(3));
    console.log(list.findNth(4));