// Statement:
// Given an array of unsorted numbers and a target number,
// find a triplet in the array whose sum is as close to the target
// number as possible, return the sum of the triplet.
// If there are more than one such triplet, return the sum of the
// triplet with the smallest sum.

const triplet_sum_close_to_target = function (arr, target_sum) {
    arr.sort((a,b) => a-b) // O(nlogn)
    let result = arr[0] + arr[1] + arr[arr.length - 1];

    for(let i = 0; i < arr.length-2; i++) { // O(n)
        let left = i+1, right = arr.length - 1;

        while(left < right) { // O(n)
            const current_sum = arr[i] + arr[left] + arr[right];

            if(current_sum > target_sum) {
                right--;
            } else {
                left++;
            }

            if(Math.abs(target_sum - current_sum) < Math.abs(target_sum - result)) {
                result = current_sum;
            }
        }
    }
    return result;
}

// Time complexity: O(nlogn) + O(n^2) => O(n^2)

console.log(triplet_sum_close_to_target([-2, 0, 1, 2], 2));
console.log(triplet_sum_close_to_target([-3, -1, 1, 2], 1));
console.log(triplet_sum_close_to_target([1, 0, 1, 1], 100));