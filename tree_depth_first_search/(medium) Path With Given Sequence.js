// Given a binary tree and a number sequence,
// find if the sequence is present as a root-to-leaf path in the given tree.

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const find_path = function (root, sequence) {
  // TODO: Write your code here
  if (root === null) {
    return sequence.length === 0;
  }

  return find_path_recursive(root, sequence, 0);
};

const find_path_recursive = function (currentNode, sequence, sequenceIndex) {
  if (currentNode === null) {
    return false;
  }

  const seqLength = sequence.length;
  if (
    sequenceIndex >= seqLength ||
    currentNode.value !== sequence[sequenceIndex]
  ) {
    return false;
  }

  if (
    currentNode.left === null &&
    currentNode.right === null &&
    sequenceIndex === seqLength - 1
  ) {
    return true;
  }
  return (
    find_path_recursive(currentNode.left, sequence, sequenceIndex + 1) ||
    find_path_recursive(currentNode.right, sequence, sequenceIndex + 1)
  );
};

const root = new TreeNode(1);
root.left = new TreeNode(0);
root.right = new TreeNode(1);
root.left.left = new TreeNode(1);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(5);

console.log(`Tree has path sequence: ${find_path(root, [1, 0, 7])}`);
console.log(`Tree has path sequence: ${find_path(root, [1, 1, 6])}`);
