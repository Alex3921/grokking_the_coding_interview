// There are ‘N’ tasks, labeled from ‘0’ to ‘N-1’. Each task can have some
// prerequisite tasks which need to be completed before it can be scheduled.
// Given the number of tasks and a list of prerequisite pairs, find out if it
// is possible to schedule all the tasks.

// Example 1:

// Input: Tasks=3, Prerequisites=[0, 1], [1, 2]
// Output: true
// Explanation: To execute task '1', task '0' needs to finish first. Similarly, task '1' needs
// to finish before '2' can be scheduled. One possible scheduling of tasks is: [0, 1, 2]

import Deque from "collections/deque.js";

const is_scheduling_possible = function (tasks, prerequisites) {
  const sortedOrder = [];
  if (tasks <= 0) {
    return sortedOrder;
  }

  // a. Initialize the graph
  const graph = Array(tasks)
    .fill(0)
    .map(() => Array()); // adjacency list graph
  const inDegree = Array(tasks).fill(0); // count of incoming edges

  // b. Build the graph
  prerequisites.forEach((prerequisite) => {
    const parent = prerequisite[0];
    const child = prerequisite[1];
    graph[parent].push(child);
    inDegree[child] += 1;
  });

  // c. Find all sources and add them to a queue
  const sources = new Deque();
  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) {
      sources.push(i);
    }
  }

  // d. Add sources to the sortedOrder and decrease it's children's incoming connections
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

  // if sortedOrder doesn't contain all tasks then there is a cyclic
  // dependency between tasks, therefore, we won't be able to schedule all tasks
  return sortedOrder.length === tasks;
};

//   Time complexity: O(V + E)
//   Space complexity: O(V + E)

console.log(
  `Is scheduling possible: ${is_scheduling_possible(3, [
    [0, 1],
    [1, 2],
  ])}`
);
console.log(
  `Is scheduling possible: ${is_scheduling_possible(3, [
    [0, 1],
    [1, 2],
    [2, 0],
  ])}`
);
console.log(
  `Is scheduling possible: ${is_scheduling_possible(6, [
    [2, 5],
    [0, 5],
    [0, 4],
    [1, 4],
    [3, 2],
    [1, 3],
  ])}`
);
