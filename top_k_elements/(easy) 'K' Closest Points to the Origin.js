// Given an array of points in a 2D plane, find ‘K’ closest points to the origin.

// Example 1:

// Input: points = [[1,2],[1,3]], K = 1
// Output: [[1,2]]
// Explanation: The Euclidean distance between (1, 2) and the origin is sqrt(5).
// The Euclidean distance between (1, 3) and the origin is sqrt(10).
// Since sqrt(5) < sqrt(10), therefore (1, 2) is closer to the origin.
// Example 2:

// Input: point = [[1, 3], [3, 4], [2, -1]], K = 2
// Output: [[1, 3], [2, -1]]

import Heap from "collections/heap.js";

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  compare(other) {
    return this.distance_from_origin() - other.distance_from_origin();
  }

  distance_from_origin() {
    return this.x * this.x + this.y * this.y;
  }

  print_point() {
    process.stdout.write(`[${this.x}, ${this.y}]`);
  }
}

function find_closest_points(points, k) {
  const maxHeap = new Heap([], null, (a, b) => a.compare(b));
  for (let i = 0; i < k; i++) {
    maxHeap.push(points[i]);
  }

  for (let i = k; i < points.length; i++) {
    if (
      points[i].distance_from_origin() < maxHeap.peek().distance_from_origin()
    ) {
      maxHeap.pop();
      maxHeap.push(points[i]);
    }
  }

  return maxHeap;
}

// Time complexity: O(NlogK)
// Space complexity: O(K)

const result = find_closest_points(
  [new Point(1, 3), new Point(3, 4), new Point(2, -1)],
  2
);
process.stdout.write("Here are the k points closest the origin: ");
result.forEach((p) => p.print_point());
