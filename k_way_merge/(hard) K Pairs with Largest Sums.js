// Given two sorted arrays in descending order, find ‘K’ pairs with the largest
// sum where each pair consists of numbers from both the arrays.

// Example 1:

// Input: L1=[9, 8, 2], L2=[6, 3, 1], K=3
// Output: [9, 3], [9, 6], [8, 6]
// Explanation: These 3 pairs have the largest sum. No other pair has a sum larger than any of these.
// Example 2:

// Input: L1=[5, 2, 1], L2=[2, -1], K=3
// Output: [5, 2], [5, -1], [2, 2]

import Heap from "collections/heap.js";

const find_k_largest_pairs = function (nums1, nums2, k) {
  const minHeap = new Heap([], null, (a, b) => b[0] - a[0]);
  for (let i = 0; i < Math.min(k, nums1.length); i++) {
    for (let j = 0; j < Math.min(k, nums2.length); j++) {
      let sum = nums1[i] + nums2[j];
      if (minHeap.length < k) {
        minHeap.push([sum, [nums1[i], nums2[j]]]);
      } else {
        if (sum < minHeap.peek()[0]) {
          break;
        } else {
          minHeap.pop();
          minHeap.push([sum, [nums1[i], nums2[j]]]);
        }
      }
    }
  }
  const result = [];

  while (minHeap.length > 0) {
    result.push(minHeap.pop()[1]);
  }

  return result;
};

// Time complexity: O(N * M * logK)
// Space complexity: O(K)

console.log(
  `Pairs with largest sum are: ${find_k_largest_pairs([9, 8, 2], [6, 3, 1], 3)}`
);
