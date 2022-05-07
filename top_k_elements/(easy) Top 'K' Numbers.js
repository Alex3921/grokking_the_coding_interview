// Given an unsorted array of numbers, find the ‘K’ largest numbers in it.

// Example 1:

// Input: [3, 1, 5, 12, 2, 11], K = 3
// Output: [5, 12, 11]
// Example 2:

// Input: [5, 12, 11, -1, 12], K = 3
// Output: [12, 11, 12]

import Heap from "collections/heap.js";

const find_k_largest_numbers = function (nums, k) {
  const result = new Heap([], null, (a, b) => b - a);
  for (let i = 0; i < k; i++) {
    result.push(nums[i]);
  }

  for (let i = k; i < nums.length; i++) {
    if (nums[i] > result.peek()) {
      result.pop();
      result.push(nums[i]);
    }
  }
  return result.toArray();
};

// Time complexity: O(K * logK + (N - K) * logK) => O(KlogK)
// Space complexity: O(K)

console.log(
  `Here are the top K numbers: ${find_k_largest_numbers(
    [3, 1, 5, 12, 2, 11],
    3
  )}`
);
console.log(
  `Here are the top K numbers: ${find_k_largest_numbers(
    [5, 12, 11, -1, 12],
    3
  )}`
);
