// Statement:
// Write a function to return the list of all such triplets instead of the count. 
// How will the time complexity change in this case?


// [-1, 1, 2, 3, 4], 5


const triplet_with_smaller_sum = function(arr, target) {
    arr.sort((a, b) => a - b)
    const triplets = [];

    for(let i = 0; i < arr.length - 2; i++){
        search_pairs(arr, target - arr[i], i, triplets);
    }

    return triplets;
  };


  const search_pairs = function(arr, target_sum, start, triplets) {
    let left = start + 1,
        right = arr.length - 1;

    while(left < right){
        const current_sum = arr[left] + arr[right];
        if(current_sum < target_sum) { // found triplets

            // we know that all elem between left and right < target_sum
            for(let i = right; i > left; i--){
                triplets.push([arr[start], arr[left], arr[i]]);
            }
            left++;
        } else {
            right--;
        }
    }
  }


console.log(triplet_with_smaller_sum([-1, 0, 2, 3], 3));
// Output: [ [ -1, 0, 3 ], [ -1, 0, 2 ] ]
console.log(triplet_with_smaller_sum([-1, 4, 2, 1, 3], 5));
// [-1, 1, 2, 3, 4]
// Output: [ [ -1, 1, 4 ], [ -1, 1, 3 ], [ -1, 1, 2 ], [ -1, 2, 3 ] ]
 