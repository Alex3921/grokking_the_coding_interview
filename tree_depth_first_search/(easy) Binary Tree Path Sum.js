// Given a binary tree and a number ‘S’, find if the tree has a path
// from root-to-leaf such that the sum of all the node values of that path equals ‘S’.

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const has_path = function (root, sum) {
  // TODO: Write your code here
  if (root === null) {
    return false;
  }

  if (root.left === null && root.right === null && sum === root.value) {
    return true;
  }

  return (
    has_path(root.left, sum - root.value) ||
    has_path(root.right, sum - root.value)
  );
};

//   Time complexity: O(n)
//   Space complexity: O(n)

var root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.left.left = new TreeNode(4)
root.left.right = new TreeNode(5)
root.right.left = new TreeNode(6)
root.right.right = new TreeNode(7)
root.left.left.left = new TreeNode(8)
root.left.left.right = new TreeNode(9)
root.left.right.left = new TreeNode(10)
root.left.right.right = new TreeNode(11)
root.left.right.right.left = new TreeNode(12)
root.left.right.right.right = new TreeNode(13)
root.left.right.right.left.left = new TreeNode(14)
root.left.right.right.left.right = new TreeNode(15)
root.left.right.right.left.right.left = new TreeNode(16)
root.left.right.right.left.right.right = new TreeNode(17)
root.left.right.right.left.right.left.left = new TreeNode(18)
root.left.right.right.left.right.left.right = new TreeNode(19)
console.log(`Tree has path: ${has_path(root, 81)}`)
console.log(`Tree has path: ${has_path(root, 80)}`)
