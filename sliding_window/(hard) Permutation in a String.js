// Statement:
// Given a string and a pattern, find out if the string contains any permutation of the pattern.

// Permutation is defined as the re-arranging of the characters of the string. For example, “abc” has the following six arangement:

// abc
// acb
// bac
// bca
// cab
// cba
// If a string has ‘n’ unique characters, it will have n! arangement.

// Step1
//  "bacu", pattern = "abc" => return true
//  "acca", pattern = "abc" => return false

// Step2
// declare 2 variables
// start a for loop and iterate over the string
// build window of patern.length size
// check if elements within the window are a permutation of pattern

const find_permutation = function (str, pattern) {
  const patternLetters = {};
  let start = 0,
    matchedLetters = 0;

  for (let i = 0; i < pattern.length; i++) {
    let char = pattern[i];
    if (!(char in patternLetters)) {
      patternLetters[char] = 0;
    }
    patternLetters[char] += 1;
  }

  for (let end = 0; end < str.length; end++) {
    const rightChar = str[end];
    if (rightChar in patternLetters) {
      patternLetters[rightChar] -= 1;

      if (patternLetters[rightChar] === 0) {
        matchedLetters += 1;
      }
    }

    if (matchedLetters === Object.keys(patternLetters).length) {
      return true;
    }

    if (end >= pattern.length - 1) {
      leftChar = str[start];
      start += 1;
      if (leftChar in patternLetters) {
        if (patternLetters[leftChar] === 0) {
          matchedLetters -= 1;
        }
        patternLetters[leftChar] += 1;
      }
    }
  }
  return false;
};

console.log(`Permutation exist: ${find_permutation('oidbcaf', 'abc')}`);
console.log(`Permutation exist: ${find_permutation('odicf', 'dc')}`);
console.log(`Permutation exist: ${find_permutation('bcdxabcdy', 'bcdyabcdx')}`);
console.log(`Permutation exist: ${find_permutation('aaacb', 'abc')}`);