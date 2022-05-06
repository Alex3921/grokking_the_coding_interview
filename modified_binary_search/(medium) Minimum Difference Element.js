// Given an array of numbers sorted in ascending order, find the element
// in the array that has the minimum difference with the given ‘key’.

// Example 1:

// Input: [4, 6, 10], key = 7
// Output: 6
// Explanation: The difference between the key '7' and '6' is minimum than any other number in the array
// Example 2:

// Input: [4, 6, 10], key = 4
// Output: 4

const search_min_diff_element = function (arr, key) {
  let start = 0,
    end = arr.length - 1;

  if (key > arr[end]) return arr[end];
  if (key < arr[start]) return arr[start];

  while (start <= end) {
    const middleIndex = Math.floor((start + end) / 2);
    const middleNumber = arr[middleIndex];
    if (key < middleNumber) {
      end = middleIndex - 1;
    } else if (key > middleNumber) {
      start = middleIndex + 1;
    } else {
      return middleNumber;
    }
  }

  if (arr[start] - key < arr[end] - key) {
    return arr[start];
  }
  return arr[end];
};

// Time complexity: O(logn);
// Space complexity: O(n)

console.log(search_min_diff_element([4, 6, 10], 7));
console.log(search_min_diff_element([4, 6, 10], 4));
console.log(search_min_diff_element([1, 3, 8, 10, 15], 12));
console.log(search_min_diff_element([4, 6, 10], 17));
console.log(search_min_diff_element([4, 6, 10, 12], 11));
