// Topological Sort of a directed graph (a graph with unidirectional edges) is a
// linear ordering of its vertices such that for every directed edge (U, V)
// from vertex U to vertex V, U comes before V in the ordering.

// Given a directed graph, find the topological ordering of its vertices.

// Example 1:

// Input: Vertices=4, Edges=[3, 2], [3, 0], [2, 0], [2, 1]
// Output: Following are the two valid topological sorts for the given graph:
// 1) 3, 2, 0, 1
// 2) 3, 2, 1, 0

import Deque from "collections/deque.js";

const topological_sort = function (vertices, edges) {
  const sortedOrder = [];

  // a. Initialize the graph
  const graph = Array(vertices)
    .fill(0)
    .map(() => Array());
  const inDegree = Array(vertices).fill(0);

  // b. Build the graph
  edges.forEach((edge) => {
    const parent = edge[0];
    const child = edge[1];
    graph[parent].push(child);
    inDegree[child] += 1;
  });

  // c. Find all sources i.e. all vertices with 0 in-degrees
  const sources = new Deque();
  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) {
      sources.push(i);
    }
  }

  // d. For each source, add it to the sortedOrder and subtract one from all of its children's in-degrees
  // if a child's in-degree becomes zero, add it to the sources queue
  while (sources.length > 0) {
    const vertex = sources.shift();
    sortedOrder.push(vertex);
    graph[vertex].forEach((child) => {
      inDegree[child] -= 1;
      if (inDegree[child] === 0) {
        sources.push(child);
      }
    });
  }

  // Topological sort is not possible if there is a cycle
  if (sortedOrder.length !== vertices) {
    return [];
  }

  return sortedOrder;
};

// Each vertex will become a source just once and each child will be accessed and removed once
// Time complexity: O(V + E)
// We are storing all the edges and each vertex in an adjacency list
// Space complexity: O(V + E)

console.log(
  `Topological sort: ${topological_sort(4, [
    [3, 2],
    [3, 0],
    [2, 0],
    [2, 1],
  ])}`
);
console.log(
  `Topological sort: ${topological_sort(5, [
    [4, 2],
    [4, 3],
    [2, 0],
    [2, 1],
    [3, 1],
  ])}`
);
console.log(
  `Topological sort: ${topological_sort(7, [
    [6, 4],
    [6, 2],
    [5, 3],
    [5, 4],
    [3, 0],
    [3, 1],
    [3, 2],
    [4, 1],
  ])}`
);
