// Given a reference of a node in a connected undirected graph.

// Return a deep copy (clone) of the graph.

// Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

// class Node {
//     public int val;
//     public List<Node> neighbors;
// }

// Test case format:

// For simplicity, each node's value is the same as the node's index (1-indexed).
// For example, the first node with val == 1, the second node with val == 2, and so on.
// The graph is represented in the test case using an adjacency list.

// An adjacency list is a collection of unordered lists used to represent a finite graph.
// Each list describes the set of neighbors of a node in the graph.

// The given node will always be the first node with val = 1. You must return the copy of the
// given node as a reference to the cloned graph.

class Node {
  constructor(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
}

const cloneGraph = function (graph) {
  function traverse(node) {
    if (!map.has(node.val)) {
      map.set(node.val, new Node(node.val));
      map.get(node.val).neighbors = node.neighbors.map(traverse);
    }
    return map.get(node.val);
  }
  const map = new Map();
  return graph ? traverse(graph) : graph;
};

// Time complexity: O(V + E);
// Spaces complexity: O(V + E);

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
node1.neighbors.push(node3);
node3.neighbors.push(node1);
node2.neighbors.push(node4);
node4.neighbors.push(node2);
console.log(node1);

const shallowClone = node1;

const deepClone = cloneGraph(node1);
deepClone.neighbors.push(node2);

node1.neighbors.push(node4);
console.log(node1);

console.log(shallowClone);

console.log(deepClone);

