// Find the largest value on each level of a binary tree
const Deque = require("./collections/deque");

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const find_largest_value = function (root) {
  const result = [];
  if (root === null) {
    return result;
  }

  const queue = new Deque();
  queue.push(root);

  while (queue.length > 0) {
    let levelMaxValue = 0;
    const levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift();
      levelMaxValue = Math.max(levelMaxValue, currentNode.value);
      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
    result.push(levelMaxValue);
  }
  return result;
};

// Time complexity: O(n)
// Space complexity: O(n)

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Level averages are: ${find_level_averages(root)}`);
