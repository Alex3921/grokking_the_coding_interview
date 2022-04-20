// Statement:
// You are visiting a farm to collect fruits. The farm has a single row of fruit trees. 
// You will be given two baskets, and your goal is to pick as many 
// fruits as possible to be placed in the given baskets.

// You will be given an array of characters where each character represents a fruit tree. 
// The farm has following restrictions:

// Each basket can have only one type of fruit. There is no limit to how many fruit a basket can hold.
// You can start with any tree, but you can’t skip a tree once you have started.
// You will pick exactly one fruit from every tree until you cannot, i.e., 
// you will stop when you have to pick from a third fruit type.
// Write a function to return the maximum number of fruits in both baskets.

// Step1: ['A', 'B', 'C', 'A', 'C']

// Step2: 
// need to keep track of how many fruits are in my baskets
// keep track of maximum number of fruits that we have
// use for loop to iterate over the array
// store every element and the times we see it
// when we meet a third distinct element empty one basket and store the new element

// Step3: 
// [] return 0
// ["a"] return 1
// ['A', 'B', 'C', 'A', 'C'] return 3

// Step4:
const fruits_into_baskets = function(arr) {
    const baskets = {};
    let maxFruits = 0,
        winStart = 0;
  
    for(let winEnd = 0; winEnd < arr.length; winEnd++) {
      const rightFruit = arr[winEnd];
  
      if(!(rightFruit in baskets)) {
        baskets[rightFruit] = 0; 
      }
  
      baskets[rightFruit] += 1;
  
      while(Object.keys(baskets).length > 2) {
        const leftFruit = arr[winStart];
        baskets[leftFruit] -= 1;
  
        if(baskets[leftFruit] === 0) {
          delete baskets[leftFruit];
        };
        winStart += 1;
      };
      maxFruits = Math.max(maxFruits, winEnd - winStart + 1);
    }
  
    return maxFruits;
  };
  
  // Step5:
  console.log(`Maximum number of fruits: ${fruits_into_baskets([])}`);
  console.log(`Maximum number of fruits: ${fruits_into_baskets(["A"])}`);
  console.log(`Maximum number of fruits: ${fruits_into_baskets(['A', 'B', 'C', 'A', 'C'])}`);
  console.log(`Maximum number of fruits: ${fruits_into_baskets(['A', 'B', 'C', 'B', 'B', 'C'])}`);