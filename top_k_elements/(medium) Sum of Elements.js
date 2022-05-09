// Given an array, find the sum of all numbers between the K1’th and K2’th
// smallest elements of that array.

// Example 1:

// Input: [1, 3, 12, 5, 15, 11], and K1=3, K2=6
// Output: 23
// Explanation: The 3rd smallest number is 5 and 6th smallest number 15.
// The sum of numbers coming
// between 5 and 15 is 23 (11+12).
// Example 2:

// Input: [3, 5, 8, 7], and K1=1, K2=4
// Output: 12
// Explanation: The sum of the numbers between the 1st smallest number (3)
// and the 4th smallest number (8) is 12 (5+7).

/*
[1,2,3,4,5,6], k1 = 1, k2 = 5
[1..2+3+4..5] = 9
check if arr.len-1 >= k2
add el to min_heap
total sum
remove el from min_heap
starting from k1+1 up until k2 - 1 add el val to total sum
return total sum
*/

import Heap from "collections/heap.js";

const find_sum_of_elements1 = function (nums, k1, k2) {
  let totalSum = 0;
  const minHeap = new Heap(nums, null, (a, b) => b - a);

  if (nums.length < k2) {
    return totalSum;
  }

  for (let i = 1; i < k2; i++) {
    const element = minHeap.pop();
    if (i > k1) {
      totalSum += element;
    }
  }

  return totalSum;
};

//   Time complexity: O(NlogN)
//   Space complexity: O(N)

const find_sum_of_elements = function (nums, k1, k2) {
  let totalSum = 0;
  const maxHeap = new Heap();

  for (let i = 0; i < nums.length; i++) {
    if (i < k2 - 1) {
      maxHeap.push(nums[i]);
    } else if (nums[i] < maxHeap.peek()) {
      maxHeap.pop();
      maxHeap.push(nums[i]);
    }
  }

  for (let i = 0; i < k2 - k1 - 1; i++) {
    totalSum += maxHeap.pop();
  }
  return totalSum;
};

// Time complexity: O(NlogK2)
// Spaces complexity: O(K2)

console.log(
  `Sum of all numbers between k1 and k2 smallest numbers: ${find_sum_of_elements(
    [1, 3, 12, 5, 15, 11],
    3,
    6
  )}`
);
console.log(
  `Sum of all numbers between k1 and k2 smallest numbers: ${find_sum_of_elements(
    [3, 5, 8, 7],
    1,
    4
  )}`
);
