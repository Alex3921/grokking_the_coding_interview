// You start at the cell (rStart, cStart) of an rows x cols grid facing east. 
// The northwest corner is at the first row and column in the grid, and the southeast corner 
// is at the last row and column.

// You will walk in a clockwise spiral shape to visit every position in this grid. 
// Whenever you move outside the grid's boundary, we continue our walk outside the grid 
// (but may return to the grid boundary later.). Eventually, we reach all rows * cols spaces of the grid.

// Return an array of coordinates representing the positions of the grid in the order you visited them.


const spiralMatrixIII = function (rows, cols, rowStart, colStart) {
    const result = [];
    let row = rowStart;
    let col = colStart;
    let direction = 0;
    let maxSteps = 1;
    let currentSteps = 0;

    while(result.length < rows * cols) {
        if(row >= 0 && row < rows && col >= 0 && col < cols) {
            result.push([row, col])
        }

        if(currentSteps < maxSteps) {
            if(direction === 1) col++;
            else if(direction === 2) row++;
            else if(direction === 3) col--;
            else row--;

            currentSteps++;
        }

        if(currentSteps === maxSteps) {
            if(direction === 1 || direction === 3) maxSteps++;
            direction = (direction + 1) % 4;
            currentSteps = 0;
        }
    }

    return result;
}


console.log(spiralMatrixIII(5, 6, 1, 4));