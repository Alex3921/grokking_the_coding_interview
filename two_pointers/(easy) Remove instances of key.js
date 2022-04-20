// Statement:
// Given an unsorted array of numbers and a target ‘key’,
// remove all instances of ‘key’ in-place and return
// the new length of the array.

const remove_element = function (arr, key) {
  let slow = 0, //3
    fast = 0; //3

  while (fast < arr.length) {
    if (arr[fast] !== key) {
      slow++;
      arr[slow] = arr[fast];
    }
    fast++;
  }
  return slow;
};

// Time complexity: O(n);
// Space complexity: O(1);

console.log(
  `Array new length: ${remove_element([3, 2, 3, 6, 3, 10, 9, 3], 3)}`
);
console.log(`Array new length: ${remove_element([2, 11, 2, 2, 1], 2)}`);
