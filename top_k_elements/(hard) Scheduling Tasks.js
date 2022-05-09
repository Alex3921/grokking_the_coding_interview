// You are given a list of tasks that need to be run, in any order, on a server.
// Each task will take one CPU interval to execute but once a task has finished,
// it has a cooling period during which it can’t be run again. If the cooling period for
// all tasks is ‘K’ intervals, find the minimum number of CPU intervals that the server
// needs to finish all tasks.

// If at any time the server can’t execute any task then it must stay idle.

// Example 1:

// Input: [a, a, a, b, c, c], K=2
// Output: 7
// Explanation: a -> c -> b -> a -> c -> idle -> a
// Example 2:

// Input: [a, b, a], K=3
// Output: 5
// Explanation: a -> b -> idle -> idle -> a

import Heap from "collections/heap.js";
import Deque from "collections/deque.js";

const schedule_tasks = function (tasks, k) {
  const maxHeap = new Heap([], null, (a, b) => a - b);
  const frequencyMap = {};

  for (let i = 0; i < tasks.length; i++) {
    if (!(tasks[i] in frequencyMap)) {
      frequencyMap[tasks[i]] = 1;
    } else {
      frequencyMap[tasks[i]] += 1;
    }
  }

  Object.keys(frequencyMap).forEach((key) => {
    maxHeap.push(frequencyMap[key]);
  });

  let timeInterval = 0;
  const queue = new Deque();

  while (maxHeap.length > 0 || queue.length > 0) {
    timeInterval += 1;
    if (maxHeap.length > 0) {
      let count = maxHeap.pop() - 1;
      if (count > 0) {
        queue.push([count, timeInterval + k]);
      }
    }

    if (queue.length > 0 && queue.peek()[1] === timeInterval) {
      maxHeap.push(queue.shift()[0]);
    }
  }
  return timeInterval;
};

console.log(
  `Minimum intervals needed to execute all tasks: ${schedule_tasks(
    ["a", "a", "a", "b", "c", "c"],
    2
  )}`
);
console.log(
  `Minimum intervals needed to execute all tasks: ${schedule_tasks(
    ["a", "b", "a"],
    3
  )}`
);
