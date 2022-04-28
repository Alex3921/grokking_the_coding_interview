// Given a binary tree, populate an array to represent its level-by-level 
// traversal in reverse order, i.e., the lowest level comes first. 
// You should populate the values of all nodes in each level from left 
// to right in separate sub-arrays.


const Deque = require('./collections/deque');

class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null; 
  }
};

const traverse = function(root) {
  result = new Deque();
  if(root === null) {
    return result;
  }

  const queue = new Deque();
  queue.push(root);

  while(queue.length > 0) {
    const levelNodes = [];
    const levelSize = queue.length;
    for(let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift();
      levelNodes.push(currentNode.value);
      if(currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      if(currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
    result.unshift(levelNodes);
  }
  return result.toArray();
}

// Time complexity: O(n)
// Space complexity: O(n)

var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
console.log(`Reverse level order traversal: ${traverse(root)}`)
