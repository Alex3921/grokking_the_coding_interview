// https://leetcode.com/problems/spiral-matrix/

// Given an m x n matrix, return all elements of the matrix in spiral order.

// Example 1:
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]

// Example 2:
// Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 10
// -100 <= matrix[i][j] <= 100

const spiralMatrix = function (matrix) {
  const res = [];

  // check if matrix is empty
  if (matrix.length === 0) {
    return res;
  }

  // declare rows and columns
  let rowBegin = 0;
  let rowEnd = matrix.length - 1;
  let colBegin = 0;
  let colEnd = matrix[0].length - 1;

  // run a loop as long as we don't exceed the boundaries
  while (rowBegin <= rowEnd && colBegin <= colEnd) {
    // scan to the right
    for (let i = colBegin; i <= colEnd; i++) {
      res.push(matrix[rowBegin][i]);
    }
    rowBegin += 1;

    // scan down
    for (let i = rowBegin; i <= rowEnd; i++) {
      res.push(matrix[i][colEnd]);
    }
    colEnd -= 1;

    // scan left
    if (rowBegin <= rowEnd) {
      for (let i = colEnd; i >= colBegin; i--) {
        res.push(matrix[rowEnd][i]);
      }
    }
    rowEnd -= 1;

    // scan up
    if (colBegin <= colEnd) {
      for (let i = rowEnd; i >= rowBegin; i--) {
        res.push(matrix[i][colBegin]);
      }
    }
    colBegin += 1;
  }

  return res;
};

// Time complexity: O(N)
// Space complexity: O(1)

const matrix = spiralMatrix([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
]);
console.log(matrix);
