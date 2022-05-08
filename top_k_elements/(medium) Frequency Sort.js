// Given a string, sort it based on the decreasing frequency of its characters.

// Example 1:

// Input: "Programming"
// Output: "rrggmmPiano"
// Explanation: 'r', 'g', and 'm' appeared twice, so they need to appear before any other character.
// Example 2:

// Input: "abcbab"
// Output: "bbbaac"
// Explanation: 'b' appeared three times, 'a' appeared twice, and 'c' appeared only once.

import Heap from "collections/heap.js";

const sort_character_by_frequency = function (str) {
  // find the frequency of each character
  const frequencyMap = {};

  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];
    if (frequencyMap[currentChar]) {
      frequencyMap[currentChar]++;
    } else {
      frequencyMap[currentChar] = 1;
    }
  }

  // add all characters to the max heap
  const maxHeap = new Heap([], null, (a, b) => a[0] - b[0]);

  Object.keys(frequencyMap).forEach((char) => {
    maxHeap.push([frequencyMap[char], char]);
  });

  let newStr = "";

  while (maxHeap.length > 0) {
    let [frequency, char] = maxHeap.pop();
    while (frequency > 0) {
      newStr += char;
      frequency--;
    }
  }

  return newStr;
};

// Time complexity: O(NlogN)
// Space complexity: O(N)

console.log(
  `String after sorting characters by frequency: ${sort_character_by_frequency(
    "Programming"
  )}`
);
console.log(
  `String after sorting characters by frequency: ${sort_character_by_frequency(
    "abcbab"
  )}`
);
