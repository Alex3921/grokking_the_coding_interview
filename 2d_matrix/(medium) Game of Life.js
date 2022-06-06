// According to Wikipedia's article: "The Game of Life, also known simply as Life, is a
// cellular automaton devised by the British mathematician John Horton Conway in 1970."

// The board is made up of an m x n grid of cells, where each cell has an initial state:
// live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight
// neighbors (horizontal, vertical, diagonal) using the following four rules
// (taken from the above Wikipedia article):

// Any live cell with fewer than two live neighbors dies as if caused by under-population.
// Any live cell with two or three live neighbors lives on to the next generation.
// Any live cell with more than three live neighbors dies, as if by over-population.
// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
// The next state is created by applying the above rules simultaneously to every cell in the current
// state, where births and deaths occur simultaneously. Given the current state of the m x n grid board,
// return the next state.

const gameOfLife = function (board) {
  // store num of rows
  let rows = board.length;

  // store num of cols
  let cols = board[0].length;

  // store coordinates for surrounding neighbors
  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  // traverse the board and update the cells with temp values
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      updateBoard(board, directions, row, col);
    }
  }

  // traverse the board and update cells with final values
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const currentCell = board[row][col];
      if (currentCell === "temp0") board[row][col] = 0;
      if (currentCell === "temp1") board[row][col] = 1;
    }
  }
  return board;
};

const updateBoard = function (board, directions, row, col) {
  // get count of surrounding alive neighbors
  const aliveNeighbors = getAliveNeighbors(board, directions, row, col);

  // cell dies if it has less than 2 or more than 3 alive neighbors
  // NOTE: we set the cells to temp so that we can simulate as if the board was updated in-place
  // without the new values messing with our result
  if (board[row][col] === 1 && (aliveNeighbors < 2 || aliveNeighbors > 3)) {
    board[row][col] = "temp0";
    // cell becomes alive if it has exactly 3 neighbors
  } else if (board[row][col] === 0 && aliveNeighbors === 3) {
    board[row][col] = "temp1";
  }
};

const getAliveNeighbors = function (board, directions, row, col) {
  let aliveCells = 0;

  // traverse every direction
  for (let i = 0; i < directions.length; i++) {
    const dir = directions[i];
    const neighborRow = row + dir[0];

    // if row is valid
    if (board[neighborRow]) {
      const neighbor = board[neighborRow][col + dir[1]];

      // determine if the cell is alive or if it was previously set to temp dead
      if (neighbor === 1 || neighbor === "temp0") {
        aliveCells++;
      }
    }
  }
  return aliveCells;
};


let result = gameOfLife([
  [0, 1, 0],
  [0, 0, 1],
  [1, 1, 1],
  [0, 0, 0],
]);
console.log("Expected: [ [ 0, 0, 0 ], [ 1, 0, 1 ], [ 0, 1, 1 ], [ 0, 1, 0 ] ]");
console.log("Actual: ", result);
