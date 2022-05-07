// Find the maximum value in a given Bitonic array.
// An array is considered bitonic if it is monotonically increasing and
// then monotonically decreasing. Monotonically increasing or decreasing
// means that for any index i in the array arr[i] != arr[i+1].

// Example 1:

// Input: [1, 3, 8, 12, 4, 2]
// Output: 12
// Explanation: The maximum number in the input bitonic array is '12'.
// Example 2:

// Input: [3, 8, 3, 1]
// Output: 8

const find_max_in_bitonic_array = function (arr) {
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
  return arr[start];
};

//   Time complexity: O(logn)
//   Space complexity: O(n)

console.log(find_max_in_bitonic_array([1, 3, 8, 12, 4, 2]));
console.log(find_max_in_bitonic_array([3, 8, 3, 1]));
console.log(find_max_in_bitonic_array([1, 3, 8, 12]));
console.log(find_max_in_bitonic_array([10, 9, 8]));
