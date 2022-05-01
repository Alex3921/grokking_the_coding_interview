// Given a binary tree and a number ‘S’, find all paths in the tree such
// that the sum of all the node values of each path equals ‘S’.
// Please note that the paths can start or end at any node but all
// paths must follow direction from parent to child (top to bottom).

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const count_paths = function (root, S) {
  // TODO: Write your code here
  if (root === null) return 0;
  return count_paths_recursive(root, S, []);
};

const count_paths_recursive = function (currentNode, targetSum, currentPath) {
  if (currentNode === null) {
    return 0;
  }

  currentPath.push(currentNode.value);
  let totalPaths = 0;
  let currentSum = 0;

  for (let i = currentPath.length - 1; i >= 0; i--) {
    currentSum += currentPath[i];
    if (currentSum === targetSum) {
      totalPaths += 1;
    }
  }
  totalPaths += count_paths_recursive(currentNode.left, targetSum, currentPath);
  totalPaths += count_paths_recursive(
    currentNode.right,
    targetSum,
    currentPath
  );

  currentPath.pop();
  return totalPaths;
};

// Time complexity: O(n)
// Space complexity: O(n)

var root = new TreeNode(2);
root.left = new TreeNode(4);
root.right = new TreeNode(2);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(2);
root.right.right = new TreeNode(4);
console.log(`Tree has paths: ${count_paths(root, 8)}`);
