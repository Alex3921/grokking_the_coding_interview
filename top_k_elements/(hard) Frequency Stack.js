// Design a class that simulates a Stack data structure, implementing the following two operations:

// push(int num): Pushes the number ‘num’ on the stack.
// pop(): Returns the most frequent number in the stack. If there is a tie,
// return the number which was pushed later.
// Example:

// After following push operations: push(1), push(2), push(3), push(2), push(1), push(2), push(5)

// 1. pop() should return 2, as it is the most frequent number
// 2. Next pop() should return 1
// 3. Next pop() should return 2

import Heap from "collections/heap.js";

class Element {
  constructor(number, frequency, sequenceNumber) {
    this.number = number;
    this.frequency = frequency;
    this.sequenceNumber = sequenceNumber;
  }

  compare(other) {
    if (this.frequency !== other.frequency) {
      return this.frequency - other.frequency;
    }

    return this.sequenceNumber - other.sequenceNumber;
  }
}

class FrequencyStack {
  constructor() {
    this.sequenceNumber = 0;
    this.maxHeap = new Heap([], null, (a, b) => a.compare(b));
    this.frequencyStack = {};
  }

  push(num) {
    if (!(num in this.frequencyStack)) {
      this.frequencyStack[num] = 1;
    } else {
      this.frequencyStack[num] += 1;
    }
    this.maxHeap.push(
      new Element(num, this.frequencyStack[num], this.sequenceNumber)
    );
    this.sequenceNumber += 1;
  }

  pop() {
    const num = this.maxHeap.pop().number;
    if (this.frequencyStack[num] > 1) {
      this.frequencyStack[num] -= 1;
    } else {
      delete this.frequencyStack[num];
    }
    return num;
  }
}
                
// Time complexity: O(logN)
// Space complexity: O(N)

var frequencyStack = new FrequencyStack();
frequencyStack.push(1);
frequencyStack.push(2);
frequencyStack.push(3);
frequencyStack.push(2);
frequencyStack.push(1);
frequencyStack.push(2);
frequencyStack.push(5);
console.log(frequencyStack.pop());
console.log(frequencyStack.pop());
console.log(frequencyStack.pop());
