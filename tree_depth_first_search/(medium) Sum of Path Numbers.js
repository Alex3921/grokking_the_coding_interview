// Given a binary tree where each node can only have a digit (0-9) value,
// each root-to-leaf path will represent a number. Find the total
// sum of all the numbers represented by all paths.

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const find_sum_of_path_numbers = function (root) {
  // TODO: Write your code here
  if (root === null) return 0;
  return find_sum_of_path_numbers_recursive(root, 0);
};

const find_sum_of_path_numbers_recursive = function (currentNode, currentPath) {
  if (currentNode === null) return 0;
  currentPath = currentPath * 10 + currentNode.val;
  if (currentNode.left === null && currentNode.right === null) {
    return currentPath;
  }
  return (
    find_sum_of_path_numbers_recursive(currentNode.left, currentPath) +
    find_sum_of_path_numbers_recursive(currentNode.right, currentPath)
  );
};

// Time complexity: O(n)
// Space complexity: O(n)

var root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);
console.log(`Total Sum of Path Numbers: ${find_sum_of_path_numbers(root)}`);
