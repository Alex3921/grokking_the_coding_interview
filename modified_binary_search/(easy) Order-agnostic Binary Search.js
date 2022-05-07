// Given a sorted array of numbers, find if a given number ‘key’ is
// present in the array. Though we know that the array is sorted,
// we don’t know if it’s sorted in ascending or descending order.
// You should assume that the array can have duplicates.

// Write a function to return the index of the ‘key’ if it is present in the array, otherwise return -1.

// Example 1:

// Input: [4, 6, 10], key = 10
// Output: 2
// Example 2:

// Input: [1, 2, 3, 4, 5, 6, 7], key = 5
// Output: 4

const binary_search = function (arr, key) {
  let start = 0,
    end = arr.length - 1;

  const isAscending = arr[start] < arr[end];
  while (start <= end) {
    const middleIndex = Math.floor((start + end) / 2);
    const middleNum = arr[middleIndex];
    if (key === middleNum) {
      return middleIndex;
    }
    if (isAscending) {
      if (key < middleNum) {
        end = middleIndex - 1;
      } else {
        start = middleIndex + 1;
      }
    } else {
      if (key < middleNum) {
        start = middleIndex + 1;
      } else {
        end = middleIndex - 1;
      }
    }
  }
  return -1;
};

// Time complexity: O(logn);
// Space complexity: O(n)

console.log(binary_search([4, 6, 10], 10));
console.log(binary_search([1, 2, 3, 4, 5, 6, 7], 5));
console.log(binary_search([10, 6, 4], 10));
console.log(binary_search([10, 6, 4], 4));
