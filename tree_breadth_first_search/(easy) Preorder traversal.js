/*
print root.data
visit root.left
visit root.right
*/

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


function binary_tree_preorder_traversal(root) {
    const result = [];

    const process = function(root) {
        result.push(root.val);
    }

    const preorder = function(root) {
        if(!root) {
            return;
        }
        process(root);
        preorder(root.left);
        preorder(root.right);
    }

    preorder(root);
    console.log(result);
    return result;
}


var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
binary_tree_preorder_traversal(root);