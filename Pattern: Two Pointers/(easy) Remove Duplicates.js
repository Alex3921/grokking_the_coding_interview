// Statement:
// Given an array of sorted numbers, remove all duplicates from it.
// You should not use any extra space; after removing the duplicates
// in-place return the length of the subarray that has no duplicate in it.

// Solution 1:
// const remove_duplicates = function (arr) {
//   let nextNonDuplicate = 1,
//     i = 0;

//   while (i < arr.length) {
//     if (arr[nextNonDuplicate - 1] !== arr[i]) {
//       arr[nextNonDuplicate] = arr[i];
//       nextNonDuplicate++;
//     }
//     i++;
//   }
//   return nextNonDuplicate;
// };


// Solution 2:
// const remove_duplicates = function (arr) {
//     return([...new Set(arr)].length);
// }


// console.log(remove_duplicates([2, 3, 3, 3, 6, 9, 9]));
// console.log(remove_duplicates([2, 2, 2, 11]));


// Solution 3:
const remove_duplicates = function (arr) {
    let slow = 0,
        fast = 0;

    while(fast < arr.length) {
        if(arr[slow] !== arr[fast]) {
            slow++;
            arr[slow] = arr[fast];
        };
        fast++;
    }
    return slow+1;
}

// Time complexity: O(n);
// Space complexity: O(1);

console.log(remove_duplicates([2, 3, 3, 3, 6, 9, 9]));
console.log(remove_duplicates([2, 2, 2, 11]));