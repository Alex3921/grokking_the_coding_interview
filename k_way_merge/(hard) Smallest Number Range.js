// Given âMâ sorted arrays, find the smallest range that includes at
// least one number from each of the âMâ lists.

// Example 1:

// Input: L1=[1, 5, 8], L2=[4, 12], L3=[7, 8, 10]
// Output: [4, 7]
// Explanation: The range [4, 7] includes 5 from L1, 4 from L2 and 7 from L3.
// Example 2:

// Input: L1=[1, 9], L2=[4, 12], L3=[7, 10, 16]
// Output: [9, 12]
// Explanation: The range [9, 12] includes 9 from L1, 12 from L2 and 10 from L3.

import Heap from "collections/heap.js";

const find_smallest_range = function (lists) {
  const minHeap = new Heap([], null, (a, b) => b[0] - a[0]);
  let rangeStart = 0,
    rangeEnd = Infinity,
    currentMaxNum = -Infinity;

  for (let i = 0; i < lists.length; i++) {
    minHeap.push([lists[i][0], 0, lists[i]]);
    currentMaxNum = Math.max(currentMaxNum, lists[i][0]);
  }

  while (minHeap.length === lists.length) {
    let [number, index, list] = minHeap.pop();
    if (rangeEnd - rangeStart > currentMaxNum - number) {
      rangeStart = number;
      rangeEnd = currentMaxNum;
    }
    if (list.length > index + 1) {
      minHeap.push([list[index + 1], index + 1, list]);
      currentMaxNum = Math.max(currentMaxNum, list[index + 1]);
    }
  }

  return [rangeStart, rangeEnd];
};

// Time complexity: O(NlogM)
// Space complexity: O(M)

console.log(
  `Smallest range is: ${find_smallest_range([
    [1, 5, 8],
    [4, 12],
    [7, 8, 10],
  ])}`
);
