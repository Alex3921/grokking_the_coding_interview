// Given a set with distinct elements, find all of its distinct subsets.

// Example 1:

// Input: [1, 3]
// Output: [], [1], [3], [1,3]

const find_subsets = function (nums) {
  // TODO: Write your code here
  const subsets = [];
  subsets.push([]);

  for (let i = 0; i < nums.length; i++) {
    const currentNumber = nums[i];
    const subsetsLength = subsets.length;
    for (let j = 0; j < subsetsLength; j++) {
      const currentSubset = subsets[j].slice();
      currentSubset.push(currentNumber);
      subsets.push(currentSubset);
    }
  }
  console.log(subsets);
  return subsets;
};

//   Time complexity: O(N * 2^N);
//   Space complexity: O(N * 2^N);

console.log(`Here is the list of subsets: ${find_subsets([1, 3])}`);
console.log(`Here is the list of subsets: ${find_subsets([1, 5, 3])}`);
