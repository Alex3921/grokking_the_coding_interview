// Statement:
// Given an array of unsorted numbers and a target number, 
// find all unique quadruplets in it, whose sum is equal to the target number.

// Example 1:

// Input: [4, 1, 2, -1, 1, -3], target=1
// Output: [-3, -1, 1, 4], [-3, 1, 1, 2]
// Explanation: Both the quadruplets add up to the target.
// Example 2:

// Input: [2, 0, -1, 1, -2, 2], target=2
// Output: [-2, 0, 2, 2], [-1, 0, 1, 2]
// Explanation: Both the quadruplets add up to the target.


function search_quadruplets(arr, target) {
    arr.sort((a, b) => a - b);
    const quadruplets = [];

    for(let i = 0; i < arr.length-3; i++) {
        if(i> 0 && arr[i] === arr[i-1]) {
            continue;
        }

        for(let j = i+1; j < arr.length-2; j++) {
            if(j > i + 1 && arr[j] === arr[j - 1]) {
                continue;
            }
            search_pair(arr, target, i, j, quadruplets);
        }
    }

    return quadruplets;
}



const search_pair = function(arr, target_sum, first, second, quadruplets) {
    let left = second + 1,
        right = arr.length-1;

    while(left < right) {
        const current_sum = arr[first] + arr[second] + arr[left] + arr[right];

        if(current_sum === target_sum) {
            quadruplets.push([arr[first], arr[second], arr[left], arr[right]]);
            left++;
            right--;
            while(left < right && arr[left] === arr[left-1]) {
                left++;
            }
            while(left < right && arr[right] === arr[right-1]) {
                right--;
            }
        } else if (current_sum > target_sum) {
            right--;
        } else {
            left++;
        }
    }
}


console.log(search_quadruplets([4, 1, 2, -1, 1, -3], 1));
console.log(search_quadruplets([2, 0, -1, 1, -2, 2], 2));