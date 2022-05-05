// Find the path with the maximum sum in a given binary tree.
// Write a function that returns the maximum sum.

// A path can be defined as a sequence of nodes between any two nodes and
// doesn’t necessarily pass through the root. The path must contain at least one node.

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class MaximumPathSum {
  constructor() {
    this.globalPathSum = -Infinity;
  }

  find_maximum_path_sum(root) {
    this.find_maximum_path_sum_recursive(root);
    return this.globalPathSum;
  }

  find_maximum_path_sum_recursive(currentNode) {
    {
      if (currentNode === null) {
        return 0;
      }
      let leftTreeMaxSum = this.find_maximum_path_sum_recursive(
        currentNode.left
      );
      let rightTreeMaxSum = this.find_maximum_path_sum_recursive(
        currentNode.right
      );

      //check if path sum is negative
      leftTreeMaxSum = Math.max(leftTreeMaxSum, 0);
      rightTreeMaxSum = Math.max(rightTreeMaxSum, 0);

      let localMaxSum = leftTreeMaxSum + rightTreeMaxSum + currentNode.value;

      this.globalPathSum = Math.max(this.globalPathSum, localMaxSum);

      return Math.max(leftTreeMaxSum, rightTreeMaxSum) + currentNode.value;
    }
  }
}

// Time complexity: O(n)
// Space complexity: O(n)

const max_path_sum = new MaximumPathSum();
var root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
console.log(`Maximum Path Sum: ${max_path_sum.find_maximum_path_sum(root)}`);

const max_path_sum1 = new MaximumPathSum();
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(6);
root.right.left.left = new TreeNode(7);
root.right.left.right = new TreeNode(8);
root.right.right.left = new TreeNode(9);
console.log(`Maximum Path Sum: ${max_path_sum1.find_maximum_path_sum(root)}`);

const max_path_sum2 = new MaximumPathSum();
root = new TreeNode(-1);
root.left = new TreeNode(-3);
console.log(`Maximum Path Sum: ${max_path_sum2.find_maximum_path_sum(root)}`);
