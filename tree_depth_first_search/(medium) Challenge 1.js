// Given a binary tree, find the length of its diameter. The diameter of a
// tree is the number of nodes on the longest path between any two leaf nodes.
// The diameter of a tree may or may not pass through the root.

// Note: You can always assume that there are at least two leaf nodes in the given tree.

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const tree_height = function (root) {
  return tree_height_recursive(root, 0);
};

const tree_height_recursive = function (root, treeHeight) {
  if (root === null) return;

  if (root.left === null && root.right === null) {
    return;
  }
  tree_height_recursive(root.left, treeHeight);
  treeHeight += 1;
  tree_height_recursive(root.right, treeHeight);

  return treeHeight;
};

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(6);
console.log(`Tree Diameter: ${root}`);
process.stdout.write(`${root}`)
