// Statement:
// Given a string, find the length of the longest substring, which has all distinct characters.

const non_repeat_substring = function(str) {
    const distinctChars = {};
    let maxWindow = 0,
        windowStart = 0;
    
    for(let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        const rightChar = str[windowEnd];

        if(rightChar in distinctChars) {
            windowStart = Math.max(windowStart, distinctChars[rightChar] + 1);
        }

        distinctChars[rightChar] = windowEnd;
        maxWindow = Math.max(maxWindow, windowEnd - windowStart + 1);
    }

    return maxWindow;
}

// Time complexity: O(n)
// Space complexity: O(1)

// const non_repeat_substring = function (str) {
//   const distinctChars = {};
//   let windowStart = 0,
//     maxLength = 0;

//   for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
//     rightChar = str[windowEnd];
//     while (rightChar in distinctChars) {
//       delete distinctChars[str[windowStart]];
//       windowStart += 1;
//     }

//     distinctChars[rightChar] = 0;
//     maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
//   }
//   return maxLength;
// };

// Time complexity: O(n)
// Space complexity: O(1)

console.log(`Length of the longest substring: ${non_repeat_substring('aabccbb')}`);
console.log(`Length of the longest substring: ${non_repeat_substring('abbbb')}`);
console.log(`Length of the longest substring: ${non_repeat_substring('abccde')}`);
