class Node{
    constructor(data, left = null, right = null){
        this.data = data,
        this.left = null,
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
      this.root = null;
    }
    add(data) {
      const node = this.root;
      if (node === null) {
        this.root = new Node(data);
        return;
      } else {
        const searchTree = function(node) {
          if (data < node.data) {
            if (node.left === null) {
              node.left = new Node(data);
              return;
            } else if (node.left !== null) {
              return searchTree(node.left);
            }
          } else if (data > node.data) {
            if (node.right === null) {
              node.right = new Node(data);
              return;
            } else if (node.right !== null) {
              return searchTree(node.right);
            }
          } else {
            return null;
          }
        };
        return searchTree(node);
      }
    }
    
    inorder(node) {
        if (node !== null) {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
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

    getRootNode(){
        return this.root;
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
console.log(BST.minNode());
console.log(BST.maxNode());

