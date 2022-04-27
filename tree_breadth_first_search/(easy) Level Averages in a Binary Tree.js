// Given a binary tree, populate an array to represent the averages of all of its levels.

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const find_level_averages = function (root) {
  result = [];
  if (root === null) {
    return result;
  }

  const queue = new Deque();
  queue.push(root);
  while (queue.length > 0) {
    let levelSum = 0;
    const levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift();
      levelSum += currentNode.value;
      if (currentNode.left === null) {
        queue.push(currentNode.left);
      }
      if (currentNode.right === null) {
        queue.push(currentNode.right);
      }
    }
    const average = levelSum / levelSize;
    result.push(average);
  }
  return result;
};

// Time complexity: O(n)
// Space complexity: O(n)

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);

console.log(`Level averages are: ${find_level_averages(root)}`);
