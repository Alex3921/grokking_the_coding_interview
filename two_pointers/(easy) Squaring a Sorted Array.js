// Statement:
// Given a sorted array, create a new array containing squares
// of all the numbers of the input array in the sorted order.

const make_squares = function (arr) {
  const squares = new Array(arr.length).fill(0);
  let highestSquaredIndex = arr.length - 1,
    right = arr.length - 1,
    left = 0;

    while(left <= right) {
        const leftSquared = arr[left]**2;
        const rightSquared = arr[right]**2;

        if(leftSquared > rightSquared) {
            squares[highestSquaredIndex] = leftSquared;
            left++;
        } else {
            squares[highestSquaredIndex] = rightSquared;
            right--;
        }
        highestSquaredIndex--;
    }

  return squares;
};


// Time complexity: O(n)
// Space complexity: O(n)


console.log(`Squares: ${make_squares([-2, -1, 0, 2, 3])}`);
console.log(`Squares: ${make_squares([-3, -1, 0, 1, 2])}`);