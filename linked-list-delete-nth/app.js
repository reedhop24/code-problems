'use-strict'

class LinkedList {
    constructor(value){
        this.head = null;
        this.length = 0;
        this.addHead(value);
    }

    addHead(value){
        let newNode = { value };
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    removeHead(){
        if(this.length === 0){
            return undefined;
        }
        let element = this.head;
        this.head = this.head.next;
        this.length--;
        return element;
    }

    findNth(value){
        let element = this.head;
        let nth = this.length;
        while(element){
            if(value === nth){
                return element;
            }
            nth--;
            element = element.next;
        }
        return element;
    }

    removeNth(value){
        let element = this.head;
        let nth = this.length;
        while(element){
            if(value === nth){
                this.removeItem(element.value);
            }
            nth--;
            element = element.next;
        }
        return element;
    }

    removeItem(val){
        if(this.length === 0){
            return undefined;
        }
        if(this.head === val){
            return this;
        }

        let previousNode = this.head
        let currentNode = previousNode.next;

        while(currentNode){
            if(currentNode.value === val){
                break;
            }
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        if(currentNode === null){
            return undefined;
        }
        previousNode.next = currentNode.Next;
        this.length--;
        return this;
    }
}

const list = new LinkedList('first')
    .addHead('second')
    .addHead('third')
    .addHead('fourth');
    
    console.log(list);
    console.log(list.findNth(1));
    list.removeNth(1);
    console.log(list.findNth(1));
    console.log(list);



    
    
  