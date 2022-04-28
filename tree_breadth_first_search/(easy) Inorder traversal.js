/*
visit root.left
print root.data
visit root.right
*/

class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
}
function binary_tree_inorder_traversal(root) {
    const result = [];

    const process = (root) => {
        result.push(root.val);
    }

    const inorder = (root) => {
        if(!root) {
            return;
        }
        inorder(root.left);
        process(root);
        inorder(root.right);
    }

    inorder(root);
    console.log(result)
    return result;
}

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
binary_tree_inorder_traversal(root);