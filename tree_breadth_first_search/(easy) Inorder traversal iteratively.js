/*
Implement inorder traversal iteratively instead of using recursion.
*/

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.visited = false;
  }
}

function inorder_traversal_iteratively(root) {
  const stack = [];
  stack.push(root);
  while (stack.length > 0) {
    const node = stack.pop();
    if (node.visited) {
      console.log(node.val);
    } else {
      node.visited = true;
      if (node.right !== null) {
        stack.push(node.right);
      }
      stack.push(node);
      if (node.left !== null) {
        stack.push(node.left);
      }
    }
  }
}

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
inorder_traversal_iteratively(root);
