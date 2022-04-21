// Statement:
// Given a list of intervals, merge all the overlapping intervals
// to produce a list that has only mutually exclusive intervals.

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  get_interval() {
    return "[" + this.start + ", " + this.end + "]";
  }
}

const merge = function (intervals) {
  // if there is only one or less intervals return
  if (intervals.length < 2) {
    return intervals;
  }

  // sort intervals by starting pos
  intervals.sort((a, b) => a.start - b.start);

  // store merged intervals
  const merged = [];

  // set first interval's start and end values
  let start = intervals[0].start,
    end = intervals[0].end;

  // loop through the rest of the intervals
  for (let i = 1; i < intervals.length; i++) {
    // set current interval
    let interval = intervals[i];

    // if current interval's start overlaps with prev end, adjust end
    if (interval.start <= end) {
      end = Math.max(interval.end, end);
    } else {
      // non-overlapping interval, add the prev interval and reset
      merged.push(new Interval(start, end));
      start = interval.start;
      end = interval.end;
    }
  }

  merged.push(new Interval(start, end));

  return merged;
};

// Time complexity: O(N*logN)
// Space complexity: O(N)

merged_intervals = merge([
  new Interval(1, 4),
  new Interval(2, 5),
  new Interval(7, 9),
]);
result = "";
for (i = 0; i < merged_intervals.length; i++) {
  result += merged_intervals[i].get_interval() + " ";
}
console.log(`Merged intervals: ${result}`);

merged_intervals = merge([
  new Interval(6, 7),
  new Interval(2, 4),
  new Interval(5, 9),
]);
result = "";
for (i = 0; i < merged_intervals.length; i++) {
  result += merged_intervals[i].get_interval() + " ";
}
console.log(`Merged intervals: ${result}`);

merged_intervals = merge([
  new Interval(1, 4),
  new Interval(2, 6),
  new Interval(3, 5),
]);
result = "";
for (i = 0; i < merged_intervals.length; i++) {
  result += merged_intervals[i].get_interval() + " ";
}
console.log(`Merged intervals: ${result}`);
