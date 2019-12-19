'use strict';

var isSymmetric = function(root) {
    if(!root) return true;
    else {
        if(root.right && root.left) {
            function recursive(tree1, tree2) {
                if(!tree1 && !tree2) return true;
                else if(!tree1 || !tree2) return false;  
                else if(tree1.val === tree2.val) return recursive(tree1.right, tree2.left) && recursive(tree1.left, tree2.right);
                else return false;
            } 
            return recursive(root.right, root.left);
        } else if (root && !root.right && !root.left) return true; 
          else return false; 
    }
}
