// Given a sorted number array and two integers ‘K’ and ‘X’,
// find ‘K’ closest numbers to ‘X’ in the array. Return the
// numbers in the sorted order. ‘X’ is not necessarily present in the array.

// Example 1:

// Input: [5, 6, 7, 8, 9], K = 3, X = 7
// Output: [6, 7, 8]
// Example 2:

// Input: [2, 4, 5, 6, 9], K = 3, X = 6
// Output: [4, 5, 6]

import Heap from "collections/heap.js";

const find_closest_elements = function (arr, K, X) {
  const middleIndex = binary_search(arr, X);
  const minHeap = new Heap([], null, (a, b) => b[0] - a[0]);

  let left = Math.max(middleIndex - K, 0);
  let right = Math.min(middleIndex + K, arr.length);

  for (let i = left; i < right; i++) {
    const difference = Math.abs(X - arr[i]);
    minHeap.push([difference, arr[i]]);
  }

  const result = [];
  while (result.length < K) {
    result.push(minHeap.pop()[1]);
  }
  return result;
};

function binary_search(arr, num) {
  let start = 0,
    end = arr.length - 1;

  while (start <= end) {
    const middle = Math.floor(start + (end - start) / 2);
    if (arr[middle] === num) {
      return middle;
    }

    if (arr[middle] < num) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  if (start > arr.length - 1) {
    return start - 1;
  }

  return start;
}

// Time complexity: O(KlogK)
// Space complexity: O(K)

console.log(
  `'K' closest numbers to 'X' are: ${find_closest_elements(
    [5, 6, 7, 8, 9],
    3,
    7
  )}`
);
console.log(
  `'K' closest numbers to 'X' are: ${find_closest_elements(
    [2, 4, 5, 6, 9],
    3,
    6
  )}`
);
console.log(
  `'K' closest numbers to 'X' are: ${find_closest_elements(
    [2, 4, 5, 6, 9],
    3,
    10
  )}`
);
