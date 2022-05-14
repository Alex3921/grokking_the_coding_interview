// There are ‘N’ tasks, labeled from ‘0’ to ‘N-1’. Each task can have some
// prerequisite tasks which need to be completed before it can be scheduled.
// Given the number of tasks and a list of prerequisite pairs, write a method to
// find the ordering of tasks we should pick to finish all tasks.

// Example 1:

// Input: Tasks=3, Prerequisites=[0, 1], [1, 2]
// Output: [0, 1, 2]
// Explanation: To execute task '1', task '0' needs to finish first. Similarly, task '1' needs
// to finish before '2' can be scheduled. A possible scheduling of tasks is: [0, 1, 2]

const find_order = function (tasks, prerequisites) {
  const sortedOrder = [];

  if (tasks <= 0) return sortedOrder;

  const graph = Array(tasks)
    .fill(0)
    .map(() => Array());
  const inDegree = Array(tasks).fill(0);

  for (let i = 0; i < prerequisites.length; i++) {
    const parent = prerequisites[i][0];
    const child = prerequisites[i][1];
    graph[parent].push(child);
    inDegree[child] += 1;
  }

  const sources = [];

  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) {
      sources.push(i);
    }
  }

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

  if (sortedOrder.length !== tasks) {
    return [];
  }

  return sortedOrder;
};

console.log(
  `Is scheduling possible: ${find_order(3, [
    [0, 1],
    [1, 2],
  ])}`
);
console.log(
  `Is scheduling possible: ${find_order(3, [
    [0, 1],
    [1, 2],
    [2, 0],
  ])}`
);
console.log(
  `Is scheduling possible: ${find_order(6, [
    [2, 5],
    [0, 5],
    [0, 4],
    [1, 4],
    [3, 2],
    [1, 3],
  ])}`
);
