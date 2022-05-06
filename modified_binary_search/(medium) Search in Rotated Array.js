// Given an array of numbers which is sorted in ascending order and also
// rotated by some arbitrary number, find if a given ‘key’ is present in it.

// Write a function to return the index of the ‘key’ in the rotated array.
// If the ‘key’ is not present, return -1. You can assume that the given array
// does not have any duplicates.

// Example 1:

// Input: [10, 15, 1, 3, 8], key = 15
// Output: 1
// Explanation: '15' is present in the array at index '1'.

const search_rotated_array = function (arr, key) {
  let start = 0,
    end = arr.length - 1;
  while (start <= end) {
    const middleIndex = Math.floor(start + (end - start) / 2);
    if (key === arr[middleIndex]) {
      return middleIndex;
    }

    if (arr[start] <= arr[middleIndex]) {
      if (arr[start] <= key && arr[middleIndex] > key) {
        end = middleIndex - 1;
      } else {
        start = middleIndex + 1;
      }
    } else {
      if (arr[middleIndex] < key && arr[end] >= key) {
        start = middleIndex + 1;
      } else {
        end = middleIndex - 1;
      }
    }
  }
  return -1;
};

//   Time complexity: O(logn)
//   Space complexity: O(1)

console.log(search_rotated_array([10, 15, 1, 3, 8], 15));
console.log(search_rotated_array([4, 5, 7, 9, 10, -1, 2], 10));
console.log(search_rotated_array([4, 5, 7, 9, 10, 11, 12, -1, 2], 2));
