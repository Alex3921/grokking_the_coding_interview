// // 1 -> Input: [2, 1, 5, 1, 3, 2], k=3
// const max_sub_array_of_size_k = function (k, arr) {
//   let maxSum = 0;
//   let winSum = 0;
//   let start = 0;

//   for (let end = 0; end < arr.length; end++) {
//     if (end > k - 1) {
//       winSum -= arr[start];
//       start += 1;
//     }

//     winSum += arr[end];
//     maxSum = Math.max(maxSum, winSum);
//   }

//   return maxSum;
// };

// console.log(`Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2])}`);
// console.log(`Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(2, [2, 3, 4, 1, 5])}`);

// const smallest_subarray_sum = function(s, arr) {
//     let start = 0,
//     winSum = 0,
//     maxLength = Infinity;

//     for(let end = 0; end < arr.length; end++) {
//         winSum += arr[end];
//         while(winSum >= s) {
//             maxLength = Math.min(maxLength, end - start + 1)
//            winSum -= arr[start];
//            start++;
//         }
//     }
//     return maxLength;
//   };

//   console.log(`Smallest subarray length: ${smallest_subarray_sum(7, [2, 1, 5, 2, 3, 2])}`);
//   console.log(`Smallest subarray length: ${smallest_subarray_sum(7, [2, 1, 5, 2, 8])}`);
//   console.log(`Smallest subarray length: ${smallest_subarray_sum(8, [3, 4, 1, 1, 6])}`);

// const longest_substring_with_k_distinct = function (str, k) {
//     let start = 0;
//     let freq = {};
//     let maxLength = 0;

//     for(let end = 0; end < str.length; end++) {
//         let char = str[end];
//         if(!(char in freq)) {
//             freq[char] = 0;
//         }
//         freq[char] += 1;
//         while(Object.keys(freq).length > 2) {
//             freq[str[start]] -= 1;
//             if(freq[str[start]] === 0) {
//                 delete freq[str[start]];
//             }

//             start++;
//         }
//         maxLength = Math.max(maxLength, end - start + 1)
//     }
//   return maxLength;
// };

// console.log(
//   `Length of the longest substring: ${longest_substring_with_k_distinct(
//     "araaci",
//     2
//   )}`
// );
// console.log(
//   `Length of the longest substring: ${longest_substring_with_k_distinct(
//     "araaci",
//     1
//   )}`
// );
// console.log(
//   `Length of the longest substring: ${longest_substring_with_k_distinct(
//     "cbbebbi",
//     3
//   )}`
// );

// const non_repeat_substring = function (str) {
//     let start = 0;
//     let freq = {};
//     let maxLength = 0;

//     for(let i = 0; i < str.length; i++) {
//         let rightChar = str[i];
//         if(rightChar in freq) {
//             start = i;
//         }

//         freq[rightChar] = i;

//         maxLength = Math.max(maxLength, i - start + 1);
//     }
//   return maxLength;
// };

// console.log(
//   `Length of the longest substring: ${non_repeat_substring("aabccbb")}`
// );
// console.log(
//   `Length of the longest substring: ${non_repeat_substring("abbbb")}`
// );
// console.log(
//   `Length of the longest substring: ${non_repeat_substring("abccde")}`
// );

// const find_permutation = function (str, pattern) {
//   const frequency = {};
//   let start = 0;
//   let matched = 0;

//   for (let i = 0; i < pattern.length; i++) {
//     let char = pattern[i];
//     if (!(char in frequency)) {
//       frequency[char] = 0;
//     }
//     frequency[char] += 1;
//   }

//   for (let end = 0; end < str.length; end++) {
//     let rightChar = str[end];
//     if (rightChar in frequency) {
//       frequency[rightChar] -= 1;
//       if (frequency[rightChar] === 0) {
//         matched += 1;
//       }
//     }

//     if (matched === Object.keys(frequency).length) {
//       return true;
//     }

//     if (end >= pattern.length - 1) {
//       let leftChar = str[start];
//       start++;
//       if (leftChar in frequency) {
//         frequency[leftChar] += 1;
//         matched -= 1;
//       }

//     }
//   }
//   return false;
// };

// console.log(`Permutation exist: ${find_permutation('oidbcaf', 'abc')}`);
// console.log(`Permutation exist: ${find_permutation('odicf', 'dc')}`);
// console.log(`Permutation exist: ${find_permutation('bcdxabcdy', 'bcdyabcdx')}`);
// console.log(`Permutation exist: ${find_permutation('aaacb', 'abc')}`);

// const find_string_anagrams = function(str, pattern) {
//     const frequency = {};
//     let start = 0;
//     let matched = 0;

//     for(let i = 0; i < pattern.length; i++) {
//         let char = pattern[i];
//         if(!(char in frequency)) {
//             frequency[char] = 0;
//         }
//         frequency[char] += 1;
//     }

//     const result_indexes = [];
//     for(let end = 0; end < str.length; end++) {
//         const rightChar = str[end];
//         if(rightChar in frequency) {
//             frequency[rightChar] -= 1;
//             if(frequency[rightChar] === 0) {
//                 matched += 1;
//             }
//         }

//         if(matched === Object.keys(frequency).length) {
//             result_indexes.push(start);
//         }

//         if(end >= pattern.length - 1) {
//             const leftChar = str[start];
//             if(frequency[leftChar] === 0) {
//                 matched -= 1;
//             }
//             frequency[leftChar] += 1;
//             start += 1;
//         }
//     }
//     // TODO: Write your code here
//     return result_indexes;
//   };

//   console.log(find_string_anagrams('ppqp', 'pq'));
// console.log(find_string_anagrams('abbcabc', 'abc'));

// const find_substring = function (str, pattern) {
//   const frequency = {};
//   let start = 0;
//   let subStart = 0;
//   let minLength = str.length + 1;
//   let matched = 0;

//   for (let i = 0; i < pattern.length; i++) {
//     const char = pattern[i];
//     if (!(char in frequency)) {
//       frequency[char] = 0;
//     }
//     frequency[char] += 1;
//   }

//   for (let end = 0; end < str.length; end++) {
//     const rightChar = str[end];
//     if (rightChar in frequency) {
//       frequency[rightChar] -= 1;
//       if (frequency[rightChar] >= 0) {
//         matched += 1;
//       }
//     }

//     while (matched === pattern.length) {
//       if (minLength > end - start + 1) {
//         minLength = end - start + 1;
//         subStart = start;
//       }

//       const leftChar = str[start];
//       start++;
//       if (leftChar in frequency) {
//         if (frequency[leftChar] === 0) {
//           matched -= 1;
//         }
//         frequency[leftChar] += 1;
//       }
//     }
//   }
//   if(minLength > str.length) {
//       return '';
//   }
//   return str.substr(subStart, subStart + minLength);
// };

// console.log(find_substring("aabdec", "abc"));
// console.log(find_substring("aabdec", "abac"));
// console.log(find_substring("abdbca", "abc"));
// console.log(find_substring("adcad", "abc"));
