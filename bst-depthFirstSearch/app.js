/* eslint-disable indent */
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

function dfs(tree, value){
    var stack = [];
    stack.push(tree.root);
    while(stack.length !== 0){
        for(var i = 0; i < stack.length; i++){
            var node = stack.pop();
            if(node.data === value){
                return node;
            }
            if(node.right){
                stack.push(node.right);
            }
            if(node.left){
                stack.push(node.left);
            }
        }
    }
    return null;
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

console.log(dfs(BST, 27));


