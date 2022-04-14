// Statement:
// Given a string and a pattern,
// find all anagrams of the pattern in the given string.

const find_string_anagrams = function (str, pattern) {
  const charFrequency = {};
  const resultIndices = [];
  let matchedChars = 0,
    windowStart = 0;

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    if (!(char in charFrequency)) {
      charFrequency[char] = 0;
    }
    charFrequency[char] += 1;
  }

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (rightChar in charFrequency) {
      charFrequency[rightChar] -= 1;
      if (charFrequency[rightChar] === 0) {
        matchedChars += 1;
      }
    }

    if (matchedChars === Object.keys(charFrequency).length) {
      resultIndices.push(windowStart);
    }

    if (windowEnd >= pattern.length - 1) {
      leftChar = str[windowStart];
      windowStart += 1;
      if (leftChar in charFrequency) {
        if (charFrequency[leftChar] === 0) {
          matchedChars -= 1;
        }
        charFrequency[leftChar] += 1;
      }
    }
  }

  return resultIndices;
};

// Time complexity: O(N + M)
// Space complexity: O(M)

console.log(find_string_anagrams('ppqp', 'pq'));
console.log(find_string_anagrams('abbcabc', 'abc'));
console.log(find_string_anagrams('12345153211', '123'));