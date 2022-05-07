// Given an array of numbers sorted in ascending order, find the range of
// a given number ‘key’. The range of the ‘key’ will be the first and last
// position of the ‘key’ in the array.

// Write a function to return the range of the ‘key’. If the ‘key’ is
// not present return [-1, -1].

// Example 1:

// Input: [4, 6, 6, 6, 9], key = 6
// Output: [1, 3]
// Example 2:

// Input: [1, 3, 8, 10, 15], key = 10
// Output: [3, 3]
// Example 3:

// Input: [1, 3, 8, 10, 15], key = 12
// Output: [-1, -1]

const find_range = function (arr, key) {
    const result = [-1, -1];
  
    // find range start
    result[0] = binary_search(arr, key, false);
  
    if (result[0] !== -1) {
      // find range end
      result[1] = binary_search(arr, key, true);
    }
  
    return result;
  };
  
  const binary_search = function (arr, key, findEnd) {
    let keyIndex = -1;
    let start = 0,
      end = arr.length - 1;
  
    while (start <= end) {
      const middleIndex = Math.floor((start + end) / 2);
      const middleNumber = arr[middleIndex];
      if (key < middleNumber) {
        end = middleIndex - 1;
      } else if (key > middleNumber) {
        start = middleIndex + 1;
      } else {
        keyIndex = middleIndex;
        if (findEnd) {
          start = middleIndex + 1;
        } else {
          end = middleIndex - 1;
        }
      }
    }
    return keyIndex;
  };
  
  // Time Complexity: O(logn);
  // Space complexity: O(1)
  
  console.log(find_range([4, 6, 6, 6, 9], 6));
  console.log(find_range([1, 3, 8, 10, 15], 10));
  console.log(find_range([1, 3, 8, 10, 15], 12));
  