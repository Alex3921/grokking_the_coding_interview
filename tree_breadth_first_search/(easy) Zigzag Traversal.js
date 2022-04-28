// Given a binary tree, populate an array to represent its zigzag 
// level order traversal. You should populate the values of all nodes 
// of the first level from left to right, then right to left for 
// the next level and keep alternating in the same manner for the following levels.


class TreeNode {

    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null; 
    }
  };
  
  
  const traverse = function(root) {
    result = [];
    if(root === null) {
        return result;
    }
    const queue = new Deque();
    queue.push(root);
    let switchSide = true;
    while(queue.length > 0) {
        const levelNodes = new Deque();
        const currentSize = queue.length;
        for(let i = 0; i < currentSize; i++) {
            const currentNode = queue.shift();
            if(shiftSide) {
                levelNodes.push(currentNode.value);
            } else {
                levelNodes.unshift(currentNode.value);
            }
            if(currentNode.left !== null) {
                queue.push(currentNode.left);
            }
            if(currentNode.right !== null) {
                queue.push(currentNode.right);
            }
        }
        result.push(levelNodes.toArray());
        switchSide = !shiftSide;
    }
    return result;
  };

//   Time complexity: O(n)
//   Space complexity: O(n)
  
  
  var root = new TreeNode(12)
  root.left = new TreeNode(7)
  root.right = new TreeNode(1)
  root.left.left = new TreeNode(9)
  root.right.left = new TreeNode(10)
  root.right.right = new TreeNode(5)
  root.right.left.left = new TreeNode(20)
  root.right.left.right = new TreeNode(17)
  console.log(`Zigzag traversal: ${traverse(root)}`)
  