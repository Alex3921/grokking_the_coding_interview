// Given an array of intervals, find the next interval of each interval.
// In a list of intervals, for an interval ‘i’ its next interval ‘j’ will
// have the smallest ‘start’ greater than or equal to the ‘end’ of ‘i’.

// Write a function to return an array containing indices of the next
// interval of each input interval. If there is no next interval of a given interval,
// return -1. It is given that none of the intervals have the same start point.

// Example 1:

// Input: Intervals [[2,3], [3,4], [5,6]]
// Output: [1, 2, -1]
// Explanation: The next interval of [2,3] is [3,4] having index ‘1’.
// Similarly, the next interval of [3,4] is [5,6] having index ‘2’.
// There is no next interval for [5,6] hence we have ‘-1’.

const Heap = require("./collections/heap");

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

const find_next_interval = function (intervals) {
  // TODO: Write your code here
  const maxStartHeap = new Heap([], null, (a, b) => a[0] - b[0]);
  const maxEndHeap = new Heap([], null, (a, b) => a[0] - b[0]);

  for (let i = 0; i < intervals.length; i++) {
    maxStartHeap.push([intervals[i].start, i]);
    maxEndHeap.push([intervals[i].end, i]);
  }
  let n = intervals.length;
  const result = Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    [topEnd, endIndex] = maxEndHeap.pop();
    result[endIndex] = -1;
    if (maxStartHeap.peek()[0] >= topEnd) {
      [topStart, startIndex] = maxStartHeap.pop();
      while (maxStartHeap.length > 0 && maxStartHeap.peek()[0] >= topEnd) {
        [topStart, startIndex] = maxStartHeap.pop();
      }
      result[endIndex] = startIndex;
      maxStartHeap.push([topStart, startIndex]);
    }
  }
  return result;
};

// Time complexity: O(nlogN)
// Space complexity: O(n)

result = find_next_interval([
  new Interval(2, 3),
  new Interval(3, 4),
  new Interval(5, 6),
]);
console.log(`Next interval indices are: ${result}`);

result = find_next_interval([
  new Interval(3, 4),
  new Interval(1, 5),
  new Interval(4, 6),
]);
console.log(`Next interval indices are: ${result}`);
