// https://leetcode.com/problems/design-tic-tac-toe/

// Assume the following rules are for the tic-tac-toe game on an n x n board between two players:

// A move is guaranteed to be valid and is placed on an empty block.
// Once a winning condition is reached, no more moves are allowed.
// A player who succeeds in placing n of their marks in a horizontal, vertical, or diagonal row wins the game.
// Implement the TicTacToe class:

// TicTacToe(int n) Initializes the object the size of the board n.
// int move(int row, int col, int player) Indicates that the player with id player plays at the cell
// (row, col) of the board. The move is guaranteed to be a valid move.

class TicTacToe {
  constructor(n) {
    this.rows = Array(n).fill(0);
    this.cols = Array(n).fill(0);
    this.diagonal = 0;
    this.antiDiagonal = 0;
    this.length = n;
  }

  move(row, col, player) {
    let i = player === 1 ? 1 : -1;

    this.rows[row] += i;
    this.cols[col] += i;
    if (row === col) this.diagonal += i;
    if (row + col === this.length - 1) this.antiDiagonal += i;

    if (
      Math.abs(this.rows[row]) === this.length ||
      Math.abs(this.cols[col]) === this.length ||
      Math.abs(this.diagonal) === this.length ||
      Math.abs(this.antiDiagonal) === this.length
    ) {
      return player;
    }

    return 0;
  }
}

const ticTacToe = new TicTacToe(3);

ticTacToe.move(0, 0, 1); // return 0 (no one wins)

ticTacToe.move(0, 2, 2); // return 0 (no one wins)

ticTacToe.move(2, 2, 1); // return 0 (no one wins)

ticTacToe.move(1, 1, 2); // return 0 (no one wins)

ticTacToe.move(2, 0, 1); // return 0 (no one wins)

console.log(ticTacToe.move(1, 0, 2)); // return 0 (no one wins)

console.log(ticTacToe.move(2, 1, 1)); // return 1 (player 1 wins)
