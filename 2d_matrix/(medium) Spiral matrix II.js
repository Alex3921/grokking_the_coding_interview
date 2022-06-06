// Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

const spiralMatrixII = function (n) {
  let size = n * n;
  let num = 1;
  let rowStart = 0;
  let rowEnd = n - 1;
  let colStart = 0;
  let colEnd = n - 1;
  let result = new Array(n).fill(0).map(() => new Array(n).fill(0));

  while (num <= size) {
    for (let i = colStart; i <= colEnd; i++) {
      result[rowStart][i] = num++;
    }
    rowStart++;

    for (let i = rowStart; i <= rowEnd; i++) {
      result[i][colEnd] = num++;
    }
    colEnd--;

    for (let i = colEnd; i >= colStart; i--) {
      result[rowEnd][i] = num++;
    }
    rowEnd--;

    for (let i = rowEnd; i >= rowStart; i--) {
      result[i][colStart] = num++;
    }
    colStart++;
  }

  return result;
};

console.log(spiralMatrixII(4));
