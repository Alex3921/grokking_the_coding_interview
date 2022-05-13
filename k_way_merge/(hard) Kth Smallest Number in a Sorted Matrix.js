// Given an N * N matrix where each row and column is sorted in ascending order,
// find the Kth smallest element in the matrix.

// Example 1:

// Input: Matrix=[
//     [2, 6, 8],
//     [3, 7, 10],
//     [5, 8, 11]
//   ],
//   K=5
// Output: 7
// Explanation: The 5th smallest number in the matrix is 7.

import Heap from "collections/heap.js";

const find_Kth_smallest = function (matrix, k) {
  const minHeap = new Heap([], null, (a, b) => b[0] - a[0]);
  for (let i = 0; i < Math.min(k, matrix.length); i++) {
    minHeap.push([matrix[i][0], 0, matrix[i]]);
  }

  let numberCount = 0;
  let number, index, row;

  while (minHeap.length > 0) {
    [number, index, row] = minHeap.pop();
    numberCount += 1;
    if (numberCount === k) {
      break;
    }
    if (row.length > index + 1) {
      minHeap.push([row[index + 1], index + 1, row]);
    }
  }
  return number;
};

// Time complexity: O(min(N,K) + KlogN);
// Space complexity: O(N)

console.log(
  `Kth smallest number is: ${find_Kth_smallest(
    [
      [2, 6, 8],
      [2, 7, 10]
    ],
    2
  )}`
);
