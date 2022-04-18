// Statement:
// Given an array with positive numbers and a positive target number,
// find all of its contiguous subarrays whose product is less than the target number.

// Example 1:

// Input: [2, 5, 3, 10], target=30
// Output: [2], [5], [2, 5], [3], [5, 3], [10]
// Explanation: There are six contiguous subarrays whose
// product is less than the target.
// Example 2:

// Input: [8, 2, 6, 5], target=50
// Output: [8], [2], [8, 2], [6], [2, 6], [5], [6, 5]
// Explanation: There are seven contiguous subarrays whose product
// is less than the target.

const find_subarrays = function (arr, target) {
  if (target <= 1) return 0;

  const result = [];
  let product = 1,
    left = 0;

    for(let right = 0; right < arr.length; right++) {
        product *= arr[right];

        while(product >= target && left < arr.length) {
            product /= arr[left];
            left++;
        }

        const tempList = new Array();

        for(let i = right; i > left - 1; i--) {
            tempList.unshift(arr[i]);
            result.push([...tempList])
        }
    }
    return result;
};

// Time complexity: O(n3)
// Space complexity: O(n3)

console.log(find_subarrays([2, 5, 3, 10], 30));
console.log(find_subarrays([8, 2, 6, 5, 1], 50));

// returns the count of subarrays < target
const find_subarraysx = function(arr, target) {
    if(target <= 1) return 0;

    let result = 0,
        product = 1,
        left = 0,
        right = 0;

    while(right < arr.length) {
        product *= arr[right];

        while(product >= target) {
            product /= arr[left];
            left++
        }

        result += right - left + 1;
        right++;
    }
    return result;
  };
  

console.log(find_subarraysx([2, 5, 3, 10], 30));
console.log(find_subarraysx([8, 2, 6, 5, 1], 50));
