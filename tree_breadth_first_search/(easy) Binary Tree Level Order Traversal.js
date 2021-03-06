// Statement:
// Given a binary tree, populate an array to represent its level-by-level 
// traversal. You should populate the values of all nodes of each level from 
// left to right in separate sub-arrays.
const Deque = require("./collections/deque");

class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  
  const traverse = function(root) {
    const result = [];
    if(root === null) {
        return result;
    }

    const queue = new Deque();
    queue.push(root);
    while(queue.length > 0) {
        const currentLength = queue.length;
        const currentLevel = [];
        for(let i = 0; i < currentLength; i++) {
            const currentNode = queue.shift();
            currentLevel.push(currentNode.val);

            if(currentNode.left !== null) {
                queue.push(currentNode.left);
            }
            if(currentNode.right !== null) {
                queue.push(currentNode.right);
            }
        }
        result.push(currentLevel);
    }
    return result;
  };
  
//   Time complexity: O(n)
//   Space complexity: O(n)
  
  var root = new TreeNode(12);
  root.left = new TreeNode(7);
  root.right = new TreeNode(1);
  root.left.left = new TreeNode(9);
  root.right.left = new TreeNode(10);
  root.right.right = new TreeNode(5);
  console.log(`Level order traversal: ${traverse(root)}`);
  