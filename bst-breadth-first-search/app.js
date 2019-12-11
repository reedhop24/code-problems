/* eslint-disable indent */
'use strict';

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    add(data){
        let newNode = {data: data, left: null, right: null,};
        const node = this.root;
        if(!node){
            return this.root = newNode;
        } else {
            const searchTree = function(node){
                if(data < node.data){
                    if(!node.left){
                        return node.left = newNode;
                    } else if(node.left){
                        return searchTree(node.left);
                    }
                } else if(data > node.data){
                    if(!node.right){
                        return node.right = newNode;
                    } else if(node.right){
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

function breadthFirst(tree, value){
    var queue = [];
    queue.push(tree.root);
    while(queue.length !== 0){
        for(var i = 0; i < queue.length; i++){
            console.log(queue);
            var node = queue.shift();
            console.log(node.data);
            if(node.data === value){
                return node;
            }
            if(node.left){
                queue.push(node.left);
            }
            if(node.right){
                queue.push(node.right);
            }
        }
    } return null;
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

console.log(breadthFirst(BST, 5));


