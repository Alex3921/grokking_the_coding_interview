// Given a binary tree, return all root-to-leaf paths.


class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}


const find_paths = function(root) {
  const results = [];
  find_paths_recursive(root, [], results);
  return results;
}

const find_paths_recursive = function(currentNode, currentPath, results) {
    if(currentNode === null) {
        return;
    }
    currentPath.push(currentNode.val);
    if(currentNode.left === null && currentNode.right === null) {
        console.log(currentPath)
        results.push(currentPath);
    } else {
        find_paths_recursive(currentNode.left, currentPath, results);
        find_paths_recursive(currentNode.right, currentPath, results);
    }
    currentPath.pop();
}

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
let result = find_paths(root);

process.stdout.write(`Tree paths: `);
for (i = 0; i < result.length; i++) {
  process.stdout.write(`[${result[i]}] `);
}
