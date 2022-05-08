// Given an unsorted array of numbers, find Kth smallest number in it.

// Please note that it is the Kth smallest number in the sorted order, 
// not the Kth distinct element.

// Example 1:

// Input: [1, 5, 12, 2, 11, 5], K = 3
// Output: 5
// Explanation: The 3rd smallest number is '5', as the first two smaller numbers are [1, 2].
// Example 2:

// Input: [1, 5, 12, 2, 11, 5], K = 4
// Output: 5
// Explanation: The 4th smallest number is '5', as the first three small numbers are [1, 2, 5].

import Heap from 'collections/heap.js';

const find_Kth_smallest_number = function(nums, k) {
    const result = new Heap();
    for(let i = 0; i < k; i++) {
        result.push(nums[i]);
    }

    for(let i = k; i < nums.length; i++) {
        if(nums[i] < result.peek()) {
            result.pop();
            result.push(nums[i]);
        }
    }

    return result.peek();
  };
  
//   Time complexity: O(K * logK + (N - K) * logK) => O(NlogK)
//   Space complexity: O(K)
  
  console.log(`Kth smallest number is: ${find_Kth_smallest_number([1, 5, 12, 2, 11, 5], 3)}`)
  console.log(`Kth smallest number is: ${find_Kth_smallest_number([1, 5, 12, 2, 11, 5], 4)}`)
  console.log(`Kth smallest number is: ${find_Kth_smallest_number([5, 12, 11, -1, 12], 3)}`)
  