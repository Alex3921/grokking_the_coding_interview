// Design a class to calculate the median of a number stream.
// The class should have the following two methods:

// insertNum(int num): stores the number in the class
// findMedian(): returns the median of all numbers inserted in the class
// If the count of numbers inserted in the class is even, the median
// will be the average of the middle two numbers.

// class MedianOfAStream {
//     constructor() {
//         this.num_stream = [];
//     }
//     insert_num(num) {
// TODO: Write your code here
//      this.num_stream.push(num);
//      this.num_stream.sort((a,b) => a - b);
//     }

//     find_median(self) {
// TODO: Write your code here
//         const streamLength = this.num_stream.length;
//         let medianAverage;
//         if(streamLength % 2 === 0) {
//             const medianSum = this.num_stream[(streamLength/2)-1] + this.num_stream[streamLength/2];
//             medianAverage = medianSum / 2
//         } else {
//             medianAverage = this.num_stream[Math.floor(streamLength / 2)]
//         }
//       return medianAverage;
//     }
//   };

const Heap = require("./collections/heap");
class MedianOfAStream {
  constructor() {
    this.minHeap = new Heap([], null, (a, b) => a - b);
    this.maxHeap = new Heap([], null, (a, b) => b - a);
  }
  insert_num(num) {
    // TODO: Write your code here
    if (this.maxHeap.length === 0 || this.maxHeap.peek() > num) {
      this.maxHeap.push(num);
    } else {
      this.minHeap.push(num);
    }
    if (this.maxHeap.length > this.minHeap.length + 1) {
      this.minHeap.push(this.maxHeap.peek());
    } else if (this.maxHeap.length < this.minHeap.length) {
      this.maxHeap.push(this.minHeap.peek());
    }
  }

  find_median() {
    // TODO: Write your code here
    if (this.minHeap.length === this.maxHeap.length) {
      return (this.minHeap.peek() + this.maxHeap.peek()) / 2.0;
    }
    return this.maxHeap.peek();
  }
}

// Time complexity: O(logn)
// Space complexity: O(n)

var medianOfAStream = new MedianOfAStream();
medianOfAStream.insert_num(3);
medianOfAStream.insert_num(1);
console.log(`The median is: ${medianOfAStream.find_median()}`);
medianOfAStream.insert_num(5);
console.log(`The median is: ${medianOfAStream.find_median()}`);
medianOfAStream.insert_num(4);
console.log(`The median is: ${medianOfAStream.find_median()}`);
