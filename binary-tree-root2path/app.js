'use strict';

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    add(data){
        let newNode = { data, left: null, right: null,};
        const node = this.root;
        if(node === null){
            this.root = newNode;
            return;
        } else {
            const searchTree = function(node){
                if(data < node.data){
                    if(node.left === null){
                        node.left = newNode;
                        return;
                    } else if (node.left) {
                        return searchTree(node.left);
                    }
                } else if(data > node.data){
                    if(node.right === null){
                        node.right = newNode;
                        return;
                    } else if (node.right){
                        return searchTree(node.right);
                    }
                } else {
                    return null;
                }
            };
            return searchTree(node);
        }
    }
}

var BST = new BinarySearchTree;
BST.add(1);
BST.add(2);
BST.add(3);
BST.add(5);


var binaryTreePaths = function(tree) {
    root = tree.root;
    var arr = [];
    function recursive(node, path, arr) {
        if(node) {
            console.log(node.data);
            path += node.val;
            if(!node.right && !node.left){
                arr.push(path); 
            } else {
                path += '->';
                recursive(node.left, path, arr);
                recursive(node.right, path, arr);
            }
        } 
    };
    recursive(root,'',arr);
    return arr;
};

console.log(binaryTreePaths(BST));

