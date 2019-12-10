class Node {
    constructor(data, left = null, right = null){
        this.data = data, 
        this.left = null,
        this.right = null
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    add(data){
        const node = this.root;
        if(node === null){
            this.root = new Node(data);
            return;
        } else {
            const searchTree = function(node){
                if(data < node.data){
                    if(node.left === null){
                        node.left = new Node(data);
                        return;
                    } else if(node.left) {
                        return searchTree(node.left);
                    }
                } else if(data > node.data) {
                    if(node.right === null){
                        node.right = new Node(data);
                        return;
                    } else if(node.right){
                        return searchTree(node.right);
                    }
                } else {
                    return null;
                }
            }
            return searchTree(node);
        }
    }

    max(root){
        let current = root;
        while(current.right !== null){
            current = current.right;
        }
        return current.data;
    }

    // The 2nd max node has two possible positions, either Case 1: it could be the child node of the max or Case 2: it is the most right nodes parent.
    secondMax(){
        let current = this.root;
        // Traverse the node
        while(current){
            // No nodes to the right which means that we have arrived at the Max. So we return the Max of what is to our left i.e. the child of the Max.
            if(current.left && !current.right){
                return this.max(current);
            }
            // Finding the  largest number with no children i.e. the most right node
            if(current.right && !current.right.left && !current.right.left){
                return current.data;
            }
            current = current.right;
        }
    }

    min(root){
        let current = root;
        while(current.left){
            current = current.left;
        }
        return current.data;
    }

     // The 2nd min node has two possible positions, either Case 1: it could be the child node of the min or Case 2: it is the most left nodes parent.
    secondMin(){
        let current = this.root;
        // Traverse the node
        while(current){
            // Finding Case 1
            if(current.right && !current.left){
                return this.min(current);
            }
            // Finding Case 2
            if(current.left && !current.left.left && !current.left.right){
                return current.data;
            }
            current = current.left;
        }
    }
}


var BST = new BinarySearchTree;
BST.add(15); 
BST.add(25); 
BST.add(10); 
BST.add(7); 
BST.add(22); 
BST.add(17); 
BST.add(13); 
BST.add(5); 
BST.add(9); 
BST.add(27); 

console.log(BST.secondMax());
console.log(BST.secondMin());