// Given a string, find if its letters can be rearranged in such a way that no
// two same characters come next to each other.

// Example 1:

// Input: "aappp"
// Output: "papap"
// Explanation: In "papap", none of the repeating characters come next to each other.
// Example 2:

// Input: "Programming"
// Output: "rgmrgmPiano" or "gmringmrPoa" or "gmrPagimnor", etc.
// Explanation: None of the repeating characters come next to each other.

import Heap from "collections/heap.js";

const rearrange_string = function (str) {
  const maxHeap = new Heap([], null, (a, b) => a[0] - b[0]);
  const frequencyMap = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (!(char in frequencyMap)) {
      frequencyMap[char] = 1;
    } else {
      frequencyMap[char] += 1;
    }
  }

  Object.keys(frequencyMap).forEach((key) => {
    maxHeap.push([frequencyMap[key], key]);
  });

  let previousChar = null,
    previousFrequency = 0,
    result = [];

  while (maxHeap.length > 0) {
    let [currentFrequency, currentChar] = maxHeap.pop();
    if (previousChar !== null && previousFrequency > 0) {
      maxHeap.push([previousFrequency, previousChar]);
    }

    result.push(currentChar);
    previousChar = currentChar;
    previousFrequency = currentFrequency - 1;
  }

  if (result.length === str.length) {
    return result.join("");
  }

  return "";
};

// Time complexity: O(NlogN)
// Space complexity: O(N)

console.log(`Rearranged string: ${rearrange_string("aappp")}`);
console.log(`Rearranged string: ${rearrange_string("Programming")}`);
console.log(`Rearranged string: ${rearrange_string("aapa")}`);
