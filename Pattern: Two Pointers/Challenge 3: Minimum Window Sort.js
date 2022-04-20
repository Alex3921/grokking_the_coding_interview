// Given an array, find the length of the smallest 
// subarray in it which when sorted will sort the whole array.

// Example 1:

// Input: [1, 2, 5, 3, 7, 10, 9, 12]
// Output: 5
// Explanation: We need to sort only the subarray [5, 3, 7, 10, 9] to make the whole array sorted
// Example 2:

// Input: [1, 3, 2, 0, -1, 7, 10]
// Output: 5
// Explanation: We need to sort only the subarray [1, 3, 2, 0, -1] to make the whole array sorted
// Example 3:

// Input: [1, 2, 3]
// Output: 0
// Explanation: The array is already sorted
// Example 4:

// Input: [3, 2, 1]
// Output: 3
// Explanation: The whole array needs to be sorted.


const shortest_window_sort = function(arr) {
    let valley = arr[0],
        peak = 0;

    for(let i = 0; i < arr.length; i++) {
        if(arr[valley] > arr[i]) {
            valley = i;
        }

        if(arr[peak] < arr[i]) {
            peak = i
        }
    }
    
    return [arr[valley], arr[peak]];
  };
  
  console.log(shortest_window_sort([1, 2, 5, 3, 7, 10, 9, 12]));