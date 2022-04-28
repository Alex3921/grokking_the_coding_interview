// Find the minimum depth of a binary tree. The minimum depth 
// is the number of nodes along the shortest path from the root 
// node to the nearest leaf node.


const Deque = require('./collections/deque')

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


const find_minimum_depth = function(root) {
    if(root === null) {
        return 0;
    }

    const queue = new Deque();
    queue.push(root);
    let minimumTreeDepth = 0;
    while(queue.length > 0) {
        minimumTreeDepth += 1;
        const levelSize = queue.length;
        for(let i = 0; i < levelSize; i++) {
            const currentNode = queue.shift();
            if(currentNode.left === null && currentNode.right === null) {
                return minimumTreeDepth;
            }
            if(currentNode.left !== null) {
                queue.push(currentNode.left);
            }
            if(currentNode.right !== null) {
                queue.push(currentNode.right);
            }
        }
    }
    return minimumTreeDepth;
}

// Time complexity = O(n)
// Space complexity = O(n)