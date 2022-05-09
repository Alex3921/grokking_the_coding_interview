// Given an array of numbers and a number ‘K’, we need to remove ‘K’ numbers
// from the array such that we are left with maximum distinct numbers.

// Example 1:

// Input: [7, 3, 5, 8, 5, 3, 3], and K=2
// Output: 3
// Explanation: We can remove two occurrences of 3 to be left with 3 distinct
// numbers [7, 3, 8], we have to skip 5 because it is not distinct and appeared twice.

// Another solution could be to remove one instance of '5' and '3' each to be left
// with three distinct numbers [7, 5, 8], in this case, we have to skip 3 because it appeared twice.
/*
if arr.len < k -> return -1;
maxHeap = [[3, 3]]
k>1
[num, freq] = maxHeap.pop()
while freq > 1 and k > 0
    freq--;
    k--;
if k===0
    return result
if(freq === 1)
    result = [8, 7, 5]
*/

import Heap from "collections/heap.js";

const find_maximum_distinct_elements = function (nums, k) {
  let distinctElementCount = 0;
  if (nums.length <= k) {
    return distinctElementCount;
  }

  const frequencyMap = {};
  nums.forEach((num) => {
    if (num in frequencyMap) {
      frequencyMap[num] += 1;
    } else {
      frequencyMap[num] = 1;
    }
  });

  const minHeap = new Heap([], null, (a, b) => b - a);
  Object.keys(frequencyMap).forEach((key) => {
    if (frequencyMap[key] === 1) {
      distinctElementCount += 1;
    } else {
      minHeap.push(frequencyMap[key]);
    }
  });

  while (k > 0 && minHeap.length > 0) {
    let frequency = minHeap.pop();
    k -= frequency - 1;
    if (k >= 0) {
      distinctElementCount += 1;
    }
  }

  if (k > 0) {
    distinctElementCount -= k;
  }

  return distinctElementCount;
};

// Time complexity: O(NlogK + KlogK)
// Space complexity: O(N)

console.log(
  `Maximum distinct numbers after removing K numbers: ${find_maximum_distinct_elements(
    [7, 3, 5, 8, 5, 3, 3],
    2
  )}`
);
console.log(
  `Maximum distinct numbers after removing K numbers: ${find_maximum_distinct_elements(
    [3, 5, 12, 11, 12],
    3
  )}`
);
console.log(
  `Maximum distinct numbers after removing K numbers: ${find_maximum_distinct_elements(
    [1, 2, 3, 3, 3, 3, 4, 4, 5, 5, 5],
    2
  )}`
);
