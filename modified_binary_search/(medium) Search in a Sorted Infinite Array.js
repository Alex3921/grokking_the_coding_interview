// Given an infinite sorted array (or an array with unknown size),
// find if a given number ‘key’ is present in the array. Write a function
// to return the index of the ‘key’ if it is present in the array, otherwise return -1.

// Since it is not possible to define an array with infinite (unknown) size,
// you will be provided with an interface ArrayReader to read elements of the array.
// ArrayReader.get(index) will return the number at index; if the array’s size is
// smaller than the index, it will return Integer.MAX_VALUE.

// Example 1:

// Input: [4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30], key = 16
// Output: 6
// Explanation: The key is present at index '6' in the array.
// Example 2:

// Input: [4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30], key = 11
// Output: -1
// Explanation: The key is not present in the array.

class ArrayReader {
  constructor(arr) {
    this.arr = arr;
  }

  get(index) {
    if (index >= this.arr.length) {
      return Number.MAX_SAFE_INTEGER;
    }
    return this.arr[index];
  }
}

const search_in_infinite_array = function (reader, key) {
  let start = 0,
    end = 1;
  //
  while (key >= reader.get(end)) {
    let newStart = (end - start) * 2;
    end = newStart * 2;
    start = newStart;
  }
  const result = binary_search(reader, start, end, key);
  return result;
};

function binary_search(reader, start, end, key) {
  while (start <= end) {
    let middleIndex = Math.floor((start + end) / 2);
    let middleNumber = reader.get(middleIndex);
    if (key < middleNumber) {
      end = middleIndex - 1;
    } else if (key > middleNumber) {
      start = middleIndex + 1;
    } else {
      return middleIndex;
    }
  }
  return -1;
}

// Time complexity: O(logn);
// Space complexity: O(1)

var reader = new ArrayReader([
  4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30,
]);
console.log(search_in_infinite_array(reader, 16));
console.log(search_in_infinite_array(reader, 11));
reader = new ArrayReader([1, 3, 8, 10, 15]);
console.log(search_in_infinite_array(reader, 15));
console.log(search_in_infinite_array(reader, 200));
