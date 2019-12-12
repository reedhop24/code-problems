/* eslint-disable indent */
'use strict';

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    add(data) {
        let newNode = {data : data, left : null, right : null,};
        const node = this.root;
        if(!node) {
            return this.root = newNode;
        } else {
            const searchTree = function(node) {
                if(data < node.data) {
                    if(!node.left) {
                        return node.left = newNode;
                    } else {
                        return searchTree(node.left);
                    }
                } else if(data > node.data) {
                    if(!node.right) {
                        return node.right = newNode;
                    } else {
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

var BST1 = new BinarySearchTree;
BST1.add(15);
BST1.add(25);
BST1.add(10);
BST1.add(7);
BST1.add(22);
BST1.add(17);
BST1.add(13);
BST1.add(5);
BST1.add(9);
BST1.add(27);

var BST2 = new BinarySearchTree;
BST2.add(15);
BST2.add(25);
BST2.add(10);
BST2.add(7);
BST2.add(22);
BST2.add(17);
BST2.add(13);
BST2.add(5);
BST2.add(9);
BST2.add(27);

var isSameTree = function(p, q) {
    let pCurr = p.root;
    let qCurr = q.root;
    var recursion = function(p, q) {
        if(!p && !q) return true;
        if(!p || !q) return false;
        if(p.data !== q.data) return false;
        return recursion(p.right, q.right) && recursion(p.left, q.left);
    };
    return recursion(pCurr, qCurr);
};

console.log(isSameTree(BST1, BST2));


