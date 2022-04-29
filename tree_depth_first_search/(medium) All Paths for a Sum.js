// Given a binary tree and a number ‘S’, find all paths from
// root-to-leaf such that the sum of all the node values of each path equals ‘S’.

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const find_paths = function (root, sum) {
  allPaths = [];
  find_paths_recursive(root, sum, [], allPaths);
  return allPaths;
};

const find_paths_recursive = function (
  currentNode,
  sum,
  currentPath,
  allPaths
) {
  if (currentNode === null) {
    return;
  }
  // add the current node to the path
  currentPath.push(currentNode.val);

  // if the current node is a leaf and its value is equal to sum, save the current path
  if (
    currentNode.left === null &&
    currentNode.right === null &&
    currentNode.val === sum
  ) {
    console.log(currentPath);
    allPaths.push(currentPath);
  } else {
    // traverse the left sub-tree
    find_paths_recursive(
      currentNode.left,
      sum - currentNode.val,
      currentPath,
      allPaths
    );
    // traverse the right sub-tree
    find_paths_recursive(
      currentNode.right,
      sum - currentNode.val,
      currentPath,
      allPaths
    );
  }
  // remove the current node from the path to backtrack,
  // we need to remove the current node while we are going up the recursive call stack.
  currentPath.pop();
};

// Time complexity: O(n^2)
// Space complexity: O(n) -- used to store the recursion stack

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
let sum = 23,
  result = find_paths(root, sum);

process.stdout.write(`Tree paths with sum ${sum}: `);
for (i = 0; i < result.length; i++) {
  process.stdout.write(`[${result[i]}] `);
}
