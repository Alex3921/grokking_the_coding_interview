// Statement:
// Given an array containing 0s and 1s, if you are allowed to replace no more
// than ‘k’ 0s with 1s, find the length of the longest contiguous subarray having all 1s.

const length_of_longest_substring = function (arr, k) {
  let start = 0,
    maxOnesCount = 0,
    maxLength = 0;

  for (let end = 0; end < arr.length; end++) {
    if (arr[end] === 1) {
      maxOnesCount += 1;
    }

    if (end - start + 1 - maxOnesCount > k) {
      if (arr[start] === 1) {
        maxOnesCount -= 1;
      }
      start += 1;
    }
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
};

// Time complexity: O(n)
// Space complexity: O(1)

console.log(length_of_longest_substring([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2));
console.log(
  length_of_longest_substring([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3)
);
