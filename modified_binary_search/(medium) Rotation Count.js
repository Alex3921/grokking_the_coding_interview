// Given an array of numbers which is sorted in ascending order and is rotated 
// ‘k’ times around a pivot, find ‘k’.

// You can assume that the array does not have any duplicates.

// Example 1:

// Input: [10, 15, 1, 3, 8]
// Output: 2
// Explanation: The array has been rotated 2 times.


// const count_rotations = function(arr) {
//     let start = 0,
//     end = arr.length - 1;

//     while(start < end) {
//         const middleIndex = Math.floor(start + (end - start) / 2);
//         if(arr[start] <= arr[middleIndex]) {
//             start = middleIndex + 1;
//         } else {
//             end = middleIndex - 1;
//         }
//     }
//     return (start === arr.length-1) ? 0 : start+1;
//   };

const count_rotations = function(arr) {
    let start = 0,
    end = arr.length - 1;

    while(start < end) {
        const middle = Math.floor(start + (end - start) / 2);

        if(arr[middle] < arr[middle - 1] && arr[middle] < arr[middle+1]) {
            return middle;
        }

        if(arr[start] < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }

    return -1
}
  
  
  console.log(count_rotations([10, 15, 1, 3, 8]))
  console.log(count_rotations([4, 5, 7, 9, 10, -1, 2]))
  console.log(count_rotations([1, 3, 8, 10]))
  