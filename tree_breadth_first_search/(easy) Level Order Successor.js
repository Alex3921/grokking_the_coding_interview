// Given a binary tree and a node, find the level order
// successor of the given node in the tree. The level order
// successor is the node that appears right after the given
// node in the level order traversal.
const Deque = require("./collections/deque");

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const find_successor = function (root, key) {
  // TODO: Write your code here
  if (root === null) {
    return 0;
  }

  const queue = new Deque();
  queue.push(node);
  while (queue.length > 0) {
    const currentNode = queue.shift();
    if (currentNode.left !== null) {
      queue.push(currentNode.left);
    }
    if (currentNode.right !== null) {
      queue.push(currentNode.right);
    }

    if (currentNode.val === key) {
      break;
    }
  }
  if (queue.length > 0) {
    return queue.peek();
  }
  return null;
};

// Time complexity: O(n)
// Space complexity: O(n)

var root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

result = find_successor(root, 3);
if (result) {
  console.log(result.val);
}

root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);

let result = find_successor(root, 9);
if (result) {
  console.log(result.val);
}

result = find_successor(root, 12);
if (result) {
  console.log(result.val);
}
