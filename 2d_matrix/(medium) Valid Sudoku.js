/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function (board) {
  const rows = new Set();
  const cols = new Set();
  const squares = new Set();
  let row;
  let col;
  let square;
  for (let i = 0; row < board.length; row++) {
    for (let j = 0; col < board.length; col++) {
      row = board[i][j];
      col = board[j][i];
      square =
        square[3 * Math.floor(i / 3) + Math.floor(j / 3)][
          ((i * 3) % 9) + (j % 3)
        ];

      if (rows.has(row)) return false;
      if (row !== ".") rows.add(row);

      if (cols.has(col)) return false;
      if (col !== ".") cols.add(col);

      if (squares.has(square)) return false;
      if (square !== ".") squares.add(square);
    }
    rows.clear();
    cols.clear();
    squares.clear();
  }
  return true;
};

const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(isValidSudoku(board));
