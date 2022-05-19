// Cycle in a Circular Array (hard) #
// We are given an array containing positive and negative numbers. Suppose the
// array contains a number ‘M’ at a particular index. Now, if ‘M’ is positive we
// will move forward ‘M’ indices and if ‘M’ is negative move backwards ‘M’ indices.
// You should assume that the array is circular which means two things:

// If, while moving forward, we reach the end of the array, we will jump to the
// first element to continue the movement.
// If, while moving backward, we reach the beginning of the array, we will jump
// to the last element to continue the movement.
// Write a method to determine if the array has a cycle. The cycle should have
// more than one element and should follow one direction which means the cycle
// should not contain both forward and backward movements.

// Example 1:

// Input: [1, 2, -1, 2, 2]
// Output: true
// Explanation: The array has a cycle among indices: 0 -> 1 -> 3 -> 0

function find_cycle(arr) {
  let n = arr.length;
  if (n <= 1) return false;

  for (let i = 0; i < n; i++) {
    let fast = i;
    let slow = i;
    let isForward = arr[i] > 0;
    while (true) {
      slow = get_next_valid_index(arr, slow, isForward);
      if (slow === -1) break;

      fast = get_next_valid_index(arr, fast, isForward);
      if (fast === -1) break;
      fast = get_next_valid_index(arr, fast, isForward);
      if (fast === -1) break;

      if (fast === slow) return true;
    }
  }
  return false;
}

function get_next_valid_index(arr, index, isForward) {
  let direction = arr[index] > 0;
  if (direction !== isForward) return -1;

  let nextIndex = (arr[index] + index) % arr.length;

  if (nextIndex < 0) {
    nextIndex += arr.length;
  }

  if (nextIndex === index) return -1;
  return nextIndex;
}

console.log(find_cycle([1, 2, -1, 2, 2]));
console.log(find_cycle([2, 2, -1, 2]));
console.log(find_cycle([2, 1, -1, -2]));
