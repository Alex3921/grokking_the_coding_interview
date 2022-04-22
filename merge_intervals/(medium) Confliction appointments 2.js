// Problem 1: Given a list of appointments, find all the conflicting appointments.

// Example:

// Appointments: [[4,5], [2,3], [3,6], [5,7], [7,8]]
// Output:
// [4,5] and [3,6] conflict.
// [3,6] and [5,7] conflict.

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  print_interval() {
    process.stdout.write(`[${this.start}, ${this.end}]`);
  }
}

const can_attend_all_appointments = function (intervals) {
  intervals.sort((a, b) => a.start - b.start);
  const result = [];

  for (let i = 0; i < intervals.length - 1; i++) {
    if (intervals[i].start < intervals[i+1].end && intervals[i+1].start < intervals[i].end) {
      result.push(intervals[i]);
      result.push(intervals[i+1]);
      i++;
    }
  }

  return result;
};

console.log("Can attend all appointments:");
let res1 = can_attend_all_appointments([
  new Interval(1, 4),
  new Interval(2, 5),
  new Interval(7, 9),
]);

for (let i = 0; i < res1.length; i++) {
  res1[i].print_interval();
}
console.log()

console.log("Can attend all appointments:");
let res2 = can_attend_all_appointments([
  new Interval(6, 7),
  new Interval(2, 4),
  new Interval(8, 12),
]);

for (let i = 0; i < res2.length; i++) {
  res2[i].print_interval();
}
console.log()

console.log("Can attend all appointments:");
let res3 = can_attend_all_appointments([
  new Interval(4, 5),
  new Interval(2, 3),
  new Interval(3, 6),
]);

for (let i = 0; i < res3.length; i++) {
  res3[i].print_interval();
}
console.log()