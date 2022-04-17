// Statement:
// Given an array arr of unsorted numbers and a target sum, 
// count all triplets in it such that arr[i] + arr[j] + arr[k] < target 
// where i, j, and k are three different indices. Write a function to 
// return the count of such triplets.
// Example 1:

// Input: [-1, 0, 2, 3], target=3 
// Output: 2
// Explanation: There are two triplets whose sum is less than the target: [-1, 0, 3], [-1, 0, 2]
// Example 2:

// Input: [-1, 4, 2, 1, 3], target=5 
// After sort: [-1, 1, 2, 3, 4]
// Output: 4
// Explanation: There are four triplets whose sum is less than the target: 
//    [-1, 1, 4], [-1, 1, 3], [-1, 1, 2], [-1, 2, 3]

const triplet_with_smaller_sum = function(arr, target) {
    arr.sort((a, b) => a - b); // O(nlogN) -- O(n)
    count = 0;

    for(let i = 0; i < arr.length - 2; i++) { // O(n)
        count += search_pairs(arr, target - arr[i], i)
    }
    return count;
  };
  

  const search_pairs = function(arr, sum, start) {
      let count = 0,
        left = start+1,
        right = arr.length - 1;

        while(left < right) { // O(n)
            if(arr[left] + arr[right] < sum) {
                count += right - left;
                left++;
            } else {
                right--;
            }
        }
        return count;
  }

// Time complexity: O(nlogN) + O(n) * O(n) => O(nlogN) + O(n^2) => O(n^2);
// Space complexity: O(n)

console.log(triplet_with_smaller_sum([-1, 0, 2, 3], 3));
console.log(triplet_with_smaller_sum([-1, 4, 2, 1, 3], 5));