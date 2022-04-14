// Statement: Given a string with lowercase letters only,
// if you are allowed to replace no more than k letters with any letter,
// find the length of the longest substring having the same letters after replacement.

const length_of_longest_substring = function (str, k) {
  const frequencyMap = {};
  let windowStart = 0,
    maxLength = 0,
    maxRepeatLetterCount = 0;

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];

    if (!(rightChar in frequencyMap)) {
      frequencyMap[rightChar] = 0;
    }
    frequencyMap[rightChar] += 1;
    maxRepeatLetterCount = Math.max(
      maxRepeatLetterCount,
      frequencyMap[rightChar]
    );

    if (windowEnd - windowStart + 1 - maxRepeatLetterCount > k) {
      leftChar = frequencyMap[windowStart];
      frequencyMap[leftChar] -= 1;
      windowStart += 1;
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
};

// Time complexity: O(n)
// Space complexity: O(26) => O(1)

console.log(length_of_longest_substring('aabccbb', 2));
console.log(length_of_longest_substring('abbcb', 1));
console.log(length_of_longest_substring('abccde', 1));