class Node {
    constructor(data, right = null, left = null){
        this.data = data,
        this.right = null,
        this.left = null
    }
}

class BinarySearchTree{
    constructor() {
        this.root = null;
    }
    add(data) {
        const node = this.root;
        if (node === null){
            this.root = new Node(data);
        return;
        } else {
            const searchTree = function(node){
                if (data < node.data) {
                    if (node.left === null){
                node.left = new Node(data);
                return;
                } else if (node.left !== null) {
                  return searchTree(node.left);
                }
                } else if (data > node.data) {
                    if (node.right === null){
                      node.right = new Node(data);
                      return;
                    } else if (node.right !== null){
                      return searchTree(node.right);
                    }
                } else {
                    return null;
                }
            };
            return searchTree(node);
        }
    }

    minNode(){
        let current = this.root;
        while(current.left !== null) {
            current = current.left;
        }
        return current.data;
    }

    maxNode(){
        let current = this.root;
        while(current.right !== null) {
            current = current.right; 
        }
        return current.data;
    }
    
    inorder(node) {
        if (node !== null) {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }
    getRootNode(){
        return this.root;
    }
    remove(data) { 
    this.root = this.removeNode(this.root, data); 
    }
    removeNode(node, key){
        if(node === null){
            return null;
        }
        else if(key < node.data){
            node.left = this.removeNode(node.left, key);
            return node;
        }
        else if(key > node.data){
            node.right = this.removeNode(node.right, key);
            return node;
        }else
        { 
             // deleting node with no children 
            if(node.left === null && node.right === null) 
            { 
                node = null; 
                return node; 
            } 
      
            // deleting node with one children 
            if(node.left === null) 
            { 
                node = node.right; 
                return node; 
            } 
              
            else if(node.right === null) 
            { 
                node = node.left; 
                return node; 
            } 
      
            // Deleting node with two children 
            // minumum node of the rigt subtree 
            // is stored in aux 
            var aux = this.minNode(node.right); 
            node.data = aux.data; 
      
            node.right = this.removeNode(node.right, aux.data); 
            return node; 
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

root = BST.getRootNode();
console.log(BST.inorder(root));

console.log(BST.isValidBST());





