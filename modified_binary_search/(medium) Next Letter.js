// Given an array of lowercase letters sorted in ascending order,
// find the smallest letter in the given array greater than a given ‘key’.

// Assume the given array is a circular list, which means that the last
// letter is assumed to be connected with the first letter. This also means that
// the smallest letter in the given array is greater than the last letter of the
// array and is also the first letter of the array.

// Write a function to return the next letter of the given ‘key’.

// Example 1:

// Input: ['a', 'c', 'f', 'h'], key = 'f'
// Output: 'h'
// Explanation: The smallest letter greater than 'f' is 'h' in the given array.
// Example 2:

// Input: ['a', 'c', 'f', 'h'], key = 'b'
// Output: 'c'
// Explanation: The smallest letter greater than 'b' is 'c'.

const search_next_letter = function (letters, key) {
  // TODO: Write your code here
  if (key >= letters[letters.length - 1]) {
    return letters[0];
  }

  let start = 0,
    end = letters.length - 1;

  while (start <= end) {
    const middleIndex = Math.floor((start + end) / 2);
    const middleLetter = letters[middleIndex];
    if (key < middleLetter) {
      end = middleIndex - 1;
    } else if (key > middleLetter) {
      start = middleIndex + 1;
    } else {
      return letters[middleIndex + 1];
    }
  }
  return letters[start];
};

//   Time complexity: O(logn);
//   Space complexity: O(1);

console.log(search_next_letter(["a", "c", "f", "h"], "f"));
console.log(search_next_letter(["a", "c", "f", "h"], "b"));
console.log(search_next_letter(["a", "c", "f", "h"], "m"));
