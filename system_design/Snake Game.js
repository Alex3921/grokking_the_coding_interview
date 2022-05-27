// https://leetcode.com/problems/design-snake-game/

// Design a Snake game that is played on a device with screen size height x width. Play the game online if you are not familiar with the game.

// The snake is initially positioned at the top left corner (0, 0) with a length of 1 unit.

// You are given an array food where food[i] = (ri, ci) is the row and column position of a piece of food that the snake can eat. When a snake eats a piece of food, its length and the game's score both increase by 1.

// Each piece of food appears one by one on the screen, meaning the second piece of food will not appear until the snake eats the first piece of food.

// When a piece of food appears on the screen, it is guaranteed that it will not appear on a block occupied by the snake.

// The game is over if the snake goes out of bounds (hits a wall) or if its head occupies a space that its body occupies after moving (i.e. a snake of length 4 cannot run into itself).

// Implement the SnakeGame class:

// SnakeGame(int width, int height, int[][] food) Initializes the object with a screen of size height x width and the positions of the food.
// int move(String direction) Returns the score of the game after applying one direction move by the snake. If the game is over, return -1.

class SnakeGame {
  constructor(width, height, food) {
    this.width = width;
    this.height = height;
    this.food = food;
    this.snake = [[0, 0]];
    this.occupied = new Set();
    this.occupied.add(`${this.snake[0]}`);
  }

  move(direction) {
    // get the current coordinates of the snake head and next meal
    this.head = this.snake[0];
    this.meal = this.food[0];

    // move snake and update coordinates
    if (direction === "U") this.snake.unshift([this.head[0] - 1, this.head[1]]);
    else if (direction === "D")
      this.snake.unshift([this.head[0] + 1, this.head[1]]);
    else if (direction === "R")
      this.snake.unshift([this.head[0], this.head[1] + 1]);
    else if (direction === "L")
      this.snake.unshift([this.head[0], this.head[1] - 1]);

    // update head coordinates
    this.head = this.snake[0];

    // check if snake has moved out of boundaries
    if (
      this.head[0] < 0 ||
      this.head[0] === this.height ||
      this.head[1] < 0 ||
      this.head[1] === this.width
    ) {
      return -1;
    }

    // check if snake has ate a meal and update meal location
    if (
      this.food.length &&
      this.head[0] === this.meal[0] &&
      this.head[1] === this.meal[1]
    ) {
      this.food.shift();
    } else {
      // if we don't eat a meal we remove last position
      this.occupied.delete(`${this.snake.pop()}`);
    }

    // if snake consumes itself we end the game
    if (this.occupied.has(`${this.head}`)) return -1;

    // add the new position of the snake head;
    this.occupied.add(`${this.head}`);

    // after every move return snake size
    return this.snake.length - 1;
  }
}


let snakeGame = new SnakeGame(3, 2, [
  [1, 2],
  [0, 1],
]);

console.log(snakeGame.move("R")); // return 0
console.log(snakeGame.move("D")); // return 0
console.log(snakeGame.move("R")); // return 1, snake eats the first piece of food. The second piece of food appears at (0, 1).
console.log(snakeGame.move("U")); // return 1
console.log(snakeGame.move("L")); // return 2, snake eats the second food. No more food appears.
console.log(snakeGame.move("U")); // return -1, game over because snake collides with border