// Given a string and a number ‘K’, find if the string can be rearranged such
// that the same characters are at least ‘K’ distance apart from each other.

// Example 1:

// Input: "mmpp", K=2
// Output: "mpmp" or "pmpm"
// Explanation: All same characters are 2 distance apart.
// Example 2:

// Input: "Programming", K=3
// Output: "rgmPrgmiano" or "gmringmrPoa" or "gmrPagimnor" and a few more
// Explanation: All same characters are 3 distance apart.

import Heap from "collections/heap.js";
import Deque from "collections/deque.js";

const reorganize_string = function (str, k) {
  const maxHeap = new Heap([], null, (a, b) => a[0] - b[0]);
  const frequencyMap = {};

  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];
    if (!(currentChar in frequencyMap)) {
      frequencyMap[currentChar] = 1;
    } else {
      frequencyMap[currentChar] += 1;
    }
  }

  Object.keys(frequencyMap).forEach((key) => {
    maxHeap.push([frequencyMap[key], key]);
  });

  let queue = new Deque(),
    result = [];

  while (maxHeap.length > 0) {
    let [frequency, char] = maxHeap.pop();
    result.push(char);
    queue.push([frequency - 1, char]);
    if (queue.length === k) {
      [frequency, char] = queue.shift();
      if (frequency > 0) {
        maxHeap.push([frequency, char]);
      }
    }
  }

  if (result.length === str.length) {
    return result.join("");
  }

  return "";
};

// Time complexity: O(NlogN)
// Space complexity: O(N)

console.log(`Reorganized string: ${reorganize_string("Programming", 3)}`);
console.log(`Reorganized string: ${reorganize_string("mmpp", 2)}`);
console.log(`Reorganized string: ${reorganize_string("aab", 2)}`);
console.log(`Reorganized string: ${reorganize_string("aapa", 3)}`);
