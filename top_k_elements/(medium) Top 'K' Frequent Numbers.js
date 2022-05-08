// Given an unsorted array of numbers, find the top ‘K’ frequently occurring numbers in it.

// Example 1:

// Input: [1, 3, 5, 12, 11, 12, 11], K = 2
// Output: [12, 11]
// Explanation: Both '11' and '12' apeared twice.
// Example 2:

// Input: [5, 12, 11, 3, 11], K = 2
// Output: [11, 5] or [11, 12] or [11, 3]
// Explanation: Only '11' appeared twice, all other numbers appeared once.

import Heap from "collections/heap.js";

const find_k_frequent_numbers = function (nums, k) {
  const frequencyMap = {};

  for (let i = 0; i < nums.length; i++) {
    const currentElement = nums[i];
    if (frequencyMap[currentElement]) {
      frequencyMap[currentElement] += 1;
    } else {
      frequencyMap[currentElement] = 1;
    }
  }

  const minHeap = new Heap([], null, (a, b) => b[0] - a[0]);

  Object.keys(frequencyMap).forEach((num) => {
    minHeap.push([frequencyMap[num], num]);
    if (minHeap.length > k) {
      minHeap.pop();
    }
  });

  const topNumbers = [];
  while (minHeap.length > 0) {
    topNumbers.push(minHeap.pop()[1]);
  }

  return topNumbers;
};

// Time complexity: O(N + NlogN)
// Spaces complexity: O(N)

console.log(
  `Here are the K frequent numbers: ${find_k_frequent_numbers(
    [1, 3, 5, 12, 11, 12, 11],
    2
  )}`
);
console.log(
  `Here are the K frequent numbers: ${find_k_frequent_numbers(
    [5, 12, 11, 3, 11, 5, 5],
    2
  )}`
);
