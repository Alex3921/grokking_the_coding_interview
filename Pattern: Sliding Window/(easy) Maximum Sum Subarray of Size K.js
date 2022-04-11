// Statement:
// Given an array of positive numbers and a positive number ‘k,’ 
// find the maximum sum of any contiguous subarray of size ‘k’.

const max_sub_array_of_size_k = function(k, arr) {
    let maxSum = 0;
    let currentWindowSum = 0;
    let windowStart = 0;

    for(let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        currentWindowSum += arr[windowEnd]; // add next element
        // slide the window, we don't need to slide if we've not hit the required window size of 'k'
        if(windowEnd >= k - 1){
            maxSum = Math.max(maxSum, currentWindowSum);
            currentWindowSum -= arr[windowStart]; // subtract the element going out
            windowStart++ // slide the window ahead
        }
    }

    return maxSum;
  };

// Time complexity: O(n)
// Space complexity: O(1)