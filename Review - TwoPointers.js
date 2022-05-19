// const pair_with_target_sum = function (arr, target_sum) {
//   // TODO: Write your code here
//   let start = 0;
//   let end = arr.length - 1;

//   while (start < end) {
//     let left = arr[start];
//     let right = arr[end];
//     if (left + right === target_sum) {
//       return [start, end];
//     } else if (left + right < target_sum) {
//       start++;
//     } else {
//       end--;
//     }
//   }
//   return [-1, -1];
// };

// console.log(pair_with_target_sum([1, 2, 3, 4, 6], 6));
// console.log(pair_with_target_sum([2, 5, 9, 11], 11));

// const remove_element = function (arr, key) {
//   let nextElement = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== key) {
//       arr[nextElement] = arr[i];
//       nextElement++;
//     }
//   }
//   return nextElement;
// };

// console.log(
//   `Array new length: ${remove_element([3, 2, 3, 6, 3, 10, 9, 3], 3)}`
// );
// console.log(`Array new length: ${remove_element([2, 11, 2, 2, 1], 2)}`);

// const make_squares = function (arr) {
//   let result = Array(arr.length).fill(0);
//   let highestSquaredIndex = arr.length - 1;
//   let left = 0;
//   let right = arr.length - 1;

//   while (left <= right) {
//     let leftSquared = arr[left] * arr[left];
//     let rightSquared = arr[right] * arr[right];
//     if (leftSquared < rightSquared) {
//       result[highestSquaredIndex] = rightSquared;
//       right--;
//     } else {
//       result[highestSquaredIndex] = leftSquared;
//       left++;
//     }
//     highestSquaredIndex--;
//   }
//   return result;
// };

// console.log(`Squares: ${make_squares([-2, -1, 0, 2, 3])}`);
// console.log(`Squares: ${make_squares([-3, -1, 0, 1, 2])}`);

// const search_triplets = function (arr) {
//   arr.sort((a, b) => a - b);
//   const triplets = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (i > 0 && arr[i] === arr[i - 1]) {
//       continue;
//     }
//     search_pairs(arr, -arr[i], i + 1, triplets);
//   }
//   return triplets;
// };

// function search_pairs(arr, target_sum, left, triplets) {
//   const right = arr.length - 1;
//   while (left < right) {
//     const currentSum = arr[left] + arr[right];
//     if (currentSum === target_sum) {
//       triplets.push([-target_sum, arr[left], arr[right]]);
//       left++;
//       right--;
//       while (left < right && arr[left] === arr[left - 1]) {
//         left++;
//       }
//       while (left < right && arr[right] === arr[right - 1]) {
//         right--;
//       }
//     } else if (currentSum < target_sum) {
//       left++;
//     } else {
//       right--;
//     }
//   }
// }

// console.log(search_triplets([-3, 0, 1, 2, -1, 1, -2]));
// console.log(search_triplets([-5, 2, -1, -2, 3]));

// const triplet_sum_close_to_target = function (arr, target_sum) {
//   arr.sort((a, b) => a - b);
//   let smallestDifference = Infinity;

//   for (let i = 0; i < arr.length; i++) {
//     let left = i + 1;
//     let right = arr.length - 1;
//     while (left < right) {
//       const targetDifference = target_sum - arr[i] - arr[left] - arr[right];
//       if (targetDifference === 0) {
//         return target_sum;
//       }

//       if (
//         Math.abs(targetDifference) < Math.abs(smallestDifference) ||
//         (Math.abs(targetDifference) === Math.abs(smallestDifference) &&
//           targetDifference > smallestDifference)
//       ) {
//           smallestDifference = targetDifference;
//       }

//       if(targetDifference > 0) {
//           left++;
//         } else {
//           right--;
//       }
//     }
//   }
//   return target_sum - smallestDifference;
// };

// console.log(triplet_sum_close_to_target([-2, 0, 1, 2], 2));
// console.log(triplet_sum_close_to_target([-3, -1, 1, 2], 1));
// console.log(triplet_sum_close_to_target([1, 0, 1, 1], 100));

// function triplet_with_smaller_sum(arr, target) {
//     arr.sort((a, b) => a - b);
//     let count = 0;
//     for(let i = 0; i < arr.length; i++) {
//         count += search_pair(arr, target - arr[i], i);
//     }
//     return count;
// }

// function search_pair(arr, target_sum, start) {
//     let count = 0;
//     let left = start + 1;
//     let right = arr.length - 1;
//     while(left < right) {
//         if(arr[left] + arr[right] < target_sum) {
//             count += right - left;
//             left++;
//         } else {
//             right--;
//         }
//     }
//     return count;
// }
// console.log(triplet_with_smaller_sum([-1, 0, 2, 3], 3));
// console.log(triplet_with_smaller_sum([-1, 4, 2, 1, 3], 5));

// import Deque from "collections/deque.js";
// function find_subarrays(arr, k) {
//     let result = [];
//     let product = 1;
//     let left = 0;

//     for(let right = 0; right < arr.length; right++) {
//         product *= arr[right];
//         while(product >= k && left < right) {
//             product /= arr[left];
//             left++;
//         }

//         const tempList = new Deque();
//         for(let i = right; i >= left; i--) {
//             tempList.unshift(arr[i]);
//             result.push(tempList.toArray());
//         }
//     }
//     return result;
// }

// console.log(find_subarrays([2, 5, 3, 10], 30));
// console.log(find_subarrays([8, 2, 6, 5], 50));

// function dutch_flag_sort(arr) {
//   let high = arr.length - 1;
//   let left = 0;
//   let right = 0;

//   while (right <= high) {
//     if (arr[right] === 0) {
//       [arr[right], arr[left]] = [arr[left], arr[right]];
//       right++;
//       left++;
//     } else if (arr[right] === 1) {
//       right++;
//     } else {
//       [arr[right], arr[high]] = [arr[high], arr[right]];
//       high--;
//     }
//   }
// }

// let arr = [1, 0, 2, 1, 0];
// dutch_flag_sort(arr);
// console.log(arr);

// arr = [2, 2, 0, 1, 2, 0];
// dutch_flag_sort(arr);
// console.log(arr);

// const search_quadruplets = function (arr, target) {
//   arr.sort((a, b) => a - b);
//   const quadruplets = [];
//   for (let i = 0; i < arr.length - 3; i++) {
//     if (i > 0 && arr[i] === arr[i - 1]) {
//       continue;
//     }

//     for (let j = i + 1; j < arr.length - 2; j++) {
//       if (j > i + 1 && arr[j] === arr[j - 1]) {
//         continue;
//       }
//       search_pairs(arr, target, i, j, quadruplets);
//     }
//   }
//   return quadruplets;
// };

// function search_pairs(arr, target, first, second, quadruplets) {
//   let left = second + 1;
//   let right = arr.length - 1;
//   while (left < right) {
//     const sum = arr[first] + arr[second] + arr[left] + arr[right];
//     if (sum === target) {
//       quadruplets.push([arr[first], arr[second], arr[left], arr[right]]);
//       left++;
//       right--;
//       while (left < right && arr[left] === arr[left - 1]) {
//         left++;
//       }
//       while (left < right && arr[right] === arr[right - 1]) {
//         right--;
//       }
//     } else if (sum < target) {
//       left++;
//     } else {
//       right--;
//     }
//   }
// }

// console.log(search_quadruplets([4, 1, 2, -1, 1, -3], 1));
// console.log(search_quadruplets([2, 0, -1, 1, -2, 2], 2));

// const backspace_compare = function (str1, str2) {
//   let index1 = str1.length - 1;
//   let index2 = str2.length - 1;
//   while (index1 >= 0 || index2 >= 0) {
//     let i1 = get_next_valid_index(str1, index1);
//     let i2 = get_next_valid_index(str2, index2);

//     if (i1 < 0 && i2 < 0) {
//       return true;
//     }
//     if (i1 < 0 || i2 < 0) {
//       return false;
//     }
//     if (str1[i1] !== str2[i2]) {
//       return false;
//     }

//     index1 = i1 - 1;
//     index2 = i2 - 1;
//   }
//   return true;
// };

// function get_next_valid_index(str, index) {
//   let backspaceCount = 0;
//   while (index >= 0) {
//     if (str[index] === "#") {
//       backspaceCount++;
//     } else if (backspaceCount > 0) {
//       backspaceCount--;
//     } else {
//       break;
//     }
//     index--;
//   }
//   return index;
// }


// console.log(backspace_compare('xy#z', 'xzz#'));
// console.log(backspace_compare('xy#z', 'xyz#'));
// console.log(backspace_compare('xp#', 'xyz##'));
// console.log(backspace_compare('xywrrmp', 'xywrrmu#p'));


// const shortest_window_sort = function(arr) {
//     let low = 0;
//     let high = arr.length - 1;
//     while(low < arr.length - 1 && arr[low] <= arr[low+1]) {
//         low++;
//     }
//     if(low === arr.length - 1) {
//         return 0;
//     }

//     while(high > 0 && arr[high] >= arr[high - 1]) {
//         high--;
//     }

//     let minSub = Infinity;
//     let maxSub = -Infinity;
//     for(let i = low; i < high + 1; i++) {
//         minSub = Math.min(minSub, arr[i]);
//         maxSub = Math.max(maxSub, arr[i]);
//     }

//     while(low > 0 && arr[low-1] > minSub) {
//         low--;
//     }
//     while(high < arr.length-1 && arr[high+1] < maxSub) {
//         high++;
//     }
//     return high - low + 1;
//   };
  

// console.log(shortest_window_sort([1, 2, 5, 3, 7, 10, 9, 12]));
// console.log(shortest_window_sort([1, 3, 2, 0, -1, 7, 10]));
// console.log(shortest_window_sort([1, 2, 3]));
// console.log(shortest_window_sort([3, 2, 1]));


