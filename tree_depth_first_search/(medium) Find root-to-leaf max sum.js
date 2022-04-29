// Given a binary tree, find the root-to-leaf path with the maximum sum.


class TreeNode {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  
  const find_max_sum_path = function(root) {
    const maxSum = 0;
    return find_max_sum_path_recursive(root, 0, maxSum);
  }
  
  const find_max_sum_path_recursive = function(currentNode, currentSum, maxSum) {
      if(currentNode === null) {
          return;
      }
      currentSum += currentNode.val;
      if(currentNode.left === null && currentNode.right === null) {
          maxSum = Math.max(maxSum, currentSum);
          console.log(maxSum)
      } else {
          find_max_sum_path_recursive(currentNode.left, currentSum, maxSum);
          find_max_sum_path_recursive(currentNode.right, currentSum, maxSum);
      }
      currentSum -= currentNode.val;
  }
  
  const root = new TreeNode(12);
  root.left = new TreeNode(7);
  root.right = new TreeNode(1);
  root.left.left = new TreeNode(4);
  root.right.left = new TreeNode(10);
  root.right.right = new TreeNode(5);
  let result = find_max_sum_path(root);
  
  process.stdout.write(`MaxSum: `);
    process.stdout.write(`${result}`);
  