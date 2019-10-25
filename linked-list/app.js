// 'use-strict'

// class linkedList {
//     constructor(value){
//         this.head = null;
//         this.headlength = 0;
//         this.addToHead(value);
//     }

//     addToHead(value){
//         const newNode = {value};
//         newNode.next = this.head;
//         this.head = newNode;
//         this.length++;
//         return this;
//     }

//     removeHead(){
//         if (this.length === 0){
//             return undefined;
//         }
//         const value = this.head.value;
//         this.head = this.head.next;
//         this.length--;
//         return value;
//     }
// }
    
//     const list = new linkedList('first')
//     .addToHead('second')
//     .addToHead('third');

//     console.log(list.removeHead());


class LinkedList{
    constructor(value){
        this.head = null;
        this.length === 0;
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
        const value = this.head.value;
        this.head = this.head.next;
        this.length--;
        return value;
    }
}

    const list = new LinkedList('first')
    .addToHead('second')
    .addToHead('third');
    console.log(list.head);

    console.log(list.removeHead());
