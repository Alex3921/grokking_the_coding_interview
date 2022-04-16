// Statement:
// Given an array of unsorted numbers and a target number,
// find a triplet in the array whose sum is as close to the target
// number as possible, return the sum of the triplet.
// If there are more than one such triplet, return the sum of the
// triplet with the smallest sum.

const triplet_sum_close_to_target = function (arr, target_sum) {
    arr.sort((a,b) => a-b)
    let smallest_difference = Infinity;

    for(let i = 0; i < arr.length-2; i++) {
        let left = i + 1, right = arr.length - 1;
        while(left < right) {
            const target_diff = target_sum - arr[i] - arr[left] - arr[right];
            if(target_diff === 0) {
                return target_sum;
            };
            if(Math.abs(target_diff) < Math.abs(smallest_difference) || (Math.abs(target_diff) === Math.abs(smallest_difference) && target_diff > smallest_difference)) {
                smallest_difference = target_diff;
            }

            if(target_diff > 0) {
                left += 1;
            } else {
                right -= 1;
            }
        }
    }
  return target_sum - smallest_difference;
};


console.log(triplet_sum_close_to_target([-2, 0, 1, 2], 2));
console.log(triplet_sum_close_to_target([-3, -1, 1, 2], 1));
console.log(triplet_sum_close_to_target([1, 0, 1, 1], 100));