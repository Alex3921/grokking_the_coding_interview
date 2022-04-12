// Statement:
// Given a string, find the length of the longest substring 
// in it with no more than K distinct characters.


const longest_substring_with_k_distinct = function(str, k) {
    let windowStart = 0,
        maxLength = 0,
        charFrequency = {};

    for(let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        const rightChar = str[windowEnd];
        if(!(rightChar in charFrequency)) {
            charFrequency[rightChar] = 0;
        }

        charFrequency[rightChar] += 1;
        while(Object.keys(charFrequency).length > k) {
            const leftChar = str[windowStart];
            charFrequency[leftChar] -= 1;

            if(charFrequency[leftChar] === 0) {
                delete charFrequency[leftChar];
            }
            windowStart += 1;
        }
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
    return maxLength;
  };


// Time complexity: O(n)
// Space complexity: O(k + 1)


console.log(`Length of the longest substring: ${longest_substring_with_k_distinct('araaci', 2)}`);
console.log(`Length of the longest substring: ${longest_substring_with_k_distinct('araaci', 1)}`);
console.log(`Length of the longest substring: ${longest_substring_with_k_distinct('cbbebi', 3)}`);