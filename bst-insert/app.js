class Node{
    // The below constructor initializes the tree with a data element which is passed when data is passed into the
    // object the left and right are set to null to initialize null elements.
    constructor(data, left = null, right = null){
        this.data = data,
        this.left = null,
        this.right = null
    }
}

class BinarySearchTree {
    // The constructor below initializes the root node as null while no data has been passed in.
    constructor() {
      this.root = null;
    }

    add(data) {
      // Set the data to the root if the current root is null (empty tree)
      const node = this.root;
      if (node === null) {
        this.root = new Node(data);
        return;
      } else {
        // If the current root is not empty create the function SearchTree
        const searchTree = function(node) {
          // If data entered into the object is less than the root the data goes to the left
          if (data < node.data) {
            // Once the node is null the data has found its position and it returns the new Node class to fill its position
            // the function uses recursion until it has found its position
            if (node.left === null) {
              node.left = new Node(data);
              return;
            } else if (node.left !== null) {
              return searchTree(node.left);
            }
            // If data entered into the object is greater than the root the data passed in goes to the right
          } else if (data > node.data) {
            // Once the node is null the data has found its position and it returns the new Node class to fill its position
            // the function uses recursion until it has found its position
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
    
    inOrder(node) {
        if (node !== null) {
            this.inOrder(node.left);
            console.log(node.data);
            this.inOrder(node.right);
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

console.log(BST.inOrder(root));
console.log(BST.minNode());
console.log(BST.maxNode());

