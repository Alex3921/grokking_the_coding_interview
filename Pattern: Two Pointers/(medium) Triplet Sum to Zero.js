// Statement:
// Given an array of unsorted numbers,
// find all unique triplets in it that add up to zero.

const search_triplets = function (nums) {
  nums.sort((a, b) => a - b); // O(nlogN)
  const triplets = []; // O(N)
  for(let i = 0; i < nums.length; i++) { // O(n)
    if(i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    search_pairs(nums, -nums[i], i+1, triplets); // O(N)
  }
  return triplets;
}

const search_pairs = function (arr, target, left, pairs) {
  let right = arr.length - 1;
  while(left < right) {
    const current_sum = arr[left] + arr[right];
    if(current_sum === target) {
      pairs.push([-current_sum, arr[left], arr[right]])
      left++;
      right--;
      while(left < right && arr[left] === arr[left-1]) {
        left++;
      };
      while(left < right && arr[right] === arr[right+1]) {
        right--;
      }
    } else if (target > current_sum) {
      left++;
    } else {
      right--;
    }
  }
}

// Time complexity: O(nlogN + N^2) => asymptotically O(N^2)
// Space complexity: O(N)


console.log(search_triplets([-3, 0, 1, 2, -1, 1, -2]));
console.log(search_triplets([-5, 2, -1, -2, 3]));
