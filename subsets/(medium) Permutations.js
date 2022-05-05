// Given a set of distinct numbers, find all of its permutations.

// Permutation is defined as the re-arranging of the elements of
// the set. For example, {1, 2, 3} has the following six permutations:

// {1, 2, 3}
// {1, 3, 2}
// {2, 1, 3}
// {2, 3, 1}
// {3, 1, 2}
// {3, 2, 1}
// If a set has ‘n’ distinct elements it will have n!
// n!
//  permutations.

const Deque = require('./collections/deque')

const find_permutations = function (nums) {
  // TODO: Write your code here
  const numsLength = nums.length;
  const result = [];
  const permutations = new Deque();
  permutations.push([]);
  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    const n = permutations.length;
    for (let p = 0; p < n; p++) {
      const oldPermutation = permutations.shift();
      for (let j = 0; j < oldPermutation.length; j++) {
        const newPermutation = oldPermutation.slice();
        newPermutation.splice(j, 0, currentNum);
        if (newPermutation.length === numsLength) {
          result.push(newPermutation);
        } else {
          permutations.push(newPermutation);
        }
      }
    }
  }
  return result;
};

console.log(`Here are all the permutations: ${find_permutations([1, 3, 5])}`);
