// Given an array of numbers and a number ‘k’, find the median of
// all the ‘k’ sized sub-arrays (or windows) of the array.

// Example 1:

// Input: nums=[1, 2, -1, 3, 5], k = 2
// Output: [1.5, 0.5, 1.0, 4.0]
// Explanation: Lets consider all windows of size ‘2’:

// [ 1, 2
// 1,2
// , -1, 3, 5] -> median is 1.5
// [1, 2
// 2
// , -1
// 1
// , 3, 5] -> median is 0.5
// [1, 2, -1, 3
// 1,3
// , 5] -> median is 1.0
// [1, 2, -1, 3, 5
// 3,5
// ] -> median is 4.0
// Example 2:

const Heap = require("./collections/heap");

class SlidingWindowMedian {
  constructor() {
    this.minHeap = new Heap([], null, (a, b) => b - a);
    this.maxHeap = new Heap([], null, (a, b) => a - b);
  }

  rebalance_heaps() {
    if (this.maxHeap.length > this.minHeap.length + 1) {
      this.minHeap.push(this.maxHeap.pop());
    } else if (this.maxHeap.length < this.minHeap.length) {
      this.maxHeap.push(this.minHeap.pop());
    }
  }

  find_sliding_window_median(nums, k) {
    // TODO: Write your code here
    const results = new Array(nums.length - k + 1).fill(0.0);
    for (let i = 0; i < nums.length; i++) {
      if (this.maxHeap.length === 0 || this.maxHeap.peek() >= nums[i]) {
        this.maxHeap.push(nums[i]);
      } else {
        this.minHeap.push(nums[i]);
      }
      this.rebalance_heaps();

      if (i - k + 1 >= 0) {
        if (this.minHeap.length === this.maxHeap.length) {
          results[i - k + 1] =
            (this.minHeap.peek() + this.maxHeap.peek()) / 2.0;
        } else {
          results[i - k + 1] = this.maxHeap.peek();
        }
        const elementToBeRemoved = nums[i - k + 1];
        if (elementToBeRemoved <= this.maxHeap.peek()) {
          this.maxHeap.delete(elementToBeRemoved);
        } else {
          this.minHeap.delete(elementToBeRemoved);
        }
        this.rebalance_heaps();
      }
    }
    return results;
  }
}

// Time complexity: O(n + k)
// Space complexity: O(k)

var slidingWindowMedian = new SlidingWindowMedian();
result = slidingWindowMedian.find_sliding_window_median([1, 2, -1, 3, 5], 2);

console.log(`Sliding window medians are: ${result}`);

slidingWindowMedian = new SlidingWindowMedian();
result = slidingWindowMedian.find_sliding_window_median([1, 2, -1, 3, 5], 3);
console.log(`Sliding window medians are: ${result}`);
