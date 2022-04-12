// Statement:
// You are visiting a farm to collect fruits. The farm has a single row of fruit trees. You will be given two baskets, and your goal is to pick as many fruits as possible to be placed in the given baskets.

// You will be given an array of characters where each character represents a fruit tree. The farm has following restrictions:

// Each basket can have only one type of fruit. There is no limit to how many fruit a basket can hold.
// You can start with any tree, but you can’t skip a tree once you have started.
// You will pick exactly one fruit from every tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.
// Write a function to return the maximum number of fruits in both baskets.


function fruits_into_baskets(fruits) {
    let windowStart = 0,
      maxLength = 0,
      fruitFrequency = {};
  
    for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
      const rightFruit = fruits[windowEnd];
      if (!(rightFruit in fruitFrequency)) {
        fruitFrequency[rightFruit] = 0;
      }
      fruitFrequency[rightFruit] += 1;
  
      while (Object.keys(fruitFrequency).length > 2) {
        const leftFruit = fruits[windowStart];
        fruitFrequency[leftFruit] -= 1;
        if (fruitFrequency[leftFruit] === 0) {
          delete fruitFrequency[leftFruit];
        }
        windowStart += 1;
      }
      maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
  
    return maxLength;
  }
  
  
  console.log(`Maximum number of fruits: ${fruits_into_baskets(['A', 'B', 'C', 'A', 'C'])}`);
  console.log(`Maximum number of fruits: ${fruits_into_baskets(['A', 'B', 'C', 'B', 'B', 'C'])}`);