// Statement:
// Given an array of sorted numbers and a target sum, 
// find a pair in the array whose sum is equal to the given target.

// Write a function to return the indices of the two numbers 
// (i.e. the pair) such that they add up to the given target.


const pair_with_targetSum = function(arr, target) {
    let leftPointer = 0,
        rightPointer = arr.length - 1;

    while(leftPointer < rightPointer) {
        const sumOfPointers = arr[leftPointer] + arr[rightPointer];
        if(sumOfPointers === target) {
            return [leftPointer, rightPointer];
        };

        if(sumOfPointers < target) {
            leftPointer++;
        } else {
            rightPointer--;
        };
    }
}


// Time complexity: O(n)
// Space complexity: O(1)


console.log(pair_with_targetSum([1, 2, 3, 4, 6], 6));
console.log(pair_with_targetSum([2, 5, 9, 11], 11));