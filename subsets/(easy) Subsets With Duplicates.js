// Given a set of numbers that might contain duplicates,
// find all of its distinct subsets.

// Example 1:

// Input: [1, 3, 3]
// Output: [], [1], [3], [1,3], [3,3], [1,3,3]
// Example 2:

// Input: [1, 5, 3, 3]
// Output: [], [1], [5], [3], [1,5], [1,3], [5,3], [1,5,3], [3,3], [1,3,3], [3,3,5], [1,5,3,3]

const find_subsets = function (nums) {
  // TODO: Write your code here
  const subsets = [];
  subsets.push([]);

  let startIndex = 0,
    endIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    startIndex = 0;
    if (i > 0 && nums[i] === nums[i - 1]) {
      startIndex = endIndex;
    }
    endIndex = subsets.length;
    for (let j = startIndex; j < endIndex; j++) {
      const currentSet = subsets[j].slice();
      currentSet.push(nums[i]);
      subsets.push(currentSet);
    }
  }
  console.log(subsets.length);
  return subsets;
};

console.log(`Here is the list of subsets: ${find_subsets([1, 3, 3])}`);
console.log(`Here is the list of subsets: ${find_subsets([1, 5, 3, 3])}`);
