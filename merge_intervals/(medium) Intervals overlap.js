// Statement:
// Given a set of intervals, find out if any two intervals overlap.

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  get_interval() {
    return "[" + this.start + ", " + this.end + "]";
  }
}

const overlap_intervals = function (intervals) {
    intervals.sort((a,b) => a.start - b.start)
  let start = intervals[0].start,
    end = intervals[0].end;

  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i];

    if (end < current.start) {
      start = current.start;
      end = current.end;
    } else if (current.start <= end) {
      return true;
    }
  }

  return false;
};

merged_intervals = overlap_intervals([
  new Interval(1, 4),
  new Interval(5, 6),
  new Interval(7, 9),
]);
console.log(merged_intervals);

merged_intervals = overlap_intervals([
  new Interval(6, 7),
  new Interval(2, 4),
  new Interval(5, 9),
]);
console.log(merged_intervals);

merged_intervals = overlap_intervals([
  new Interval(1, 4),
  new Interval(5, 6),
  new Interval(7, 8),
]);
console.log(merged_intervals);
