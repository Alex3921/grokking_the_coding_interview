// Statement:
// Given an array of positive numbers and a positive number āS,ā find the length of the smallest 
// contiguous subarray whose sum is greater than or equal to āSā. Return 0 if no such subarray exists.


const smallest_subarray_sum = function(s, arr) {
    let windowSum = 0,
        minLength = Infinity,
        windowStart = 0;

    for(let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd];

        while(windowSum >= s) {
            minLength = Math.min(minLength, windowEnd - windowStart + 1);
            windowSum -= arr[windowStart];
            windowStart++;
        }
    }

    if(minLength === Infinity) {
        return 0;
    }

    return minLength;
  };

// Time complexity: O(n)
// Space complexity: O(1)

  console.log(`Smallest subarray length: ${smallest_subarray_sum(7, [2, 1, 5, 2, 3, 2])}`);
  console.log(`Smallest subarray length: ${smallest_subarray_sum(7, [2, 1, 5, 2, 8])}`);
  console.log(`Smallest subarray length: ${smallest_subarray_sum(8, [3, 4, 1, 1, 6])}`);