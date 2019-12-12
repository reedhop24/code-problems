'use strict';

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


var traversal = function(tree) {
    var root = tree.root;
    var max = [];
    var inorder = function(node, count) {
        count = count || 0;
        if(node){
            count += 1;
            inorder(node.left, count);
            max.push(count);
            inorder(node.right, count);
         }
    }
    inorder(root);
    return Math.max(...max);
};

console.log(traversal(BST));