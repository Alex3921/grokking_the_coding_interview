// Given a Bitonic array, find if a given ‘key’ is present in it.
// An array is considered bitonic if it is monotonically increasing and
// then monotonically decreasing. Monotonically increasing or decreasing
// means that for any index i in the array arr[i] != arr[i+1].

// Write a function to return the index of the ‘key’. If the ‘key’ is not present, return -1.

// Example 1:

// Input: [1, 3, 8, 4, 3], key=4
// Output: 3
// Example 2:

// Input: [3, 8, 3, 1], key=8
// Output: 1

const search_bitonic_array = function (arr, key) {
  const maxIndex = find_max_index(arr);
  const start = 0;
  const end = arr.length - 1;
  let keyIndex = binary_search(arr, key, start, maxIndex);
  if (keyIndex !== -1) {
    return keyIndex;
  }

  return binary_search(arr, key, maxIndex + 1, end);
};

const find_max_index = function (arr) {
  let start = 0,
    end = arr.length - 1;
  while (start < end) {
    const middleIndex = Math.floor(start + (end - start) / 2);
    const middleNumber = arr[middleIndex];
    if (middleNumber < arr[middleIndex + 1]) {
      start = middleIndex + 1;
    } else {
      end = middleIndex;
    }
  }
  return start;
};

const binary_search = function (arr, key, start, end) {
  let keyIndex = -1;
  while (start <= end) {
    const middleIndex = Math.floor(start + (end - start) / 2);
    const middleNumber = arr[middleIndex];

    if (key === middleNumber) {
      return middleIndex;
    }

    if (arr[start] < arr[end]) {
      // ascending
      if (key > middleNumber) {
        start = middleIndex + 1;
      } else {
        end = middleIndex - 1;
      }
    } else {
      // descending
      if (key > middleNumber) {
        end = middleIndex - 1;
      } else {
        start = middleIndex + 1;
      }
    }
  }
  return keyIndex;
};

// Time complexity: O(logn)
// Space complexity: O(1)

console.log(search_bitonic_array([1, 3, 8, 4, 3], 4));
console.log(search_bitonic_array([3, 8, 3, 1], 8));
console.log(search_bitonic_array([1, 3, 8, 12], 12));
console.log(search_bitonic_array([10, 9, 8], 10));
