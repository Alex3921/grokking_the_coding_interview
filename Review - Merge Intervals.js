// class Interval {
//   constructor(start, end) {
//     this.start = start;
//     this.end = end;
//   }

//   get_interval() {
//     return "[" + this.start + ", " + this.end + "]";
//   }
// }

// const merge = function (intervals) {
//   const merged = [];
//   if (intervals.length < 2) return intervals;
//   intervals.sort((a, b) => a.start - b.start);

//   let start = intervals[0].start;
//   let end = intervals[0].end;
//   for (let i = 1; i < intervals.length; i++) {
//     const interval = intervals[i];
//     if (interval.start < end) {
//       end = Math.max(end, interval.end);
//     } else {
//       merged.push(new Interval(start, end));
//       start = interval.start;
//       end = interval.end;
//     }
//   }
//   merged.push(new Interval(start, end));
//   return merged;
// };

// let merged_intervals = merge([
//   new Interval(1, 4),
//   new Interval(2, 5),
//   new Interval(7, 9),
// ]);
// let result = "";
// for (let i = 0; i < merged_intervals.length; i++) {
//   result += merged_intervals[i].get_interval() + " ";
// }
// console.log(`Merged intervals: ${result}`);

// merged_intervals = merge([
//   new Interval(6, 7),
//   new Interval(2, 4),
//   new Interval(5, 9),
// ]);
// result = "";
// for (let i = 0; i < merged_intervals.length; i++) {
//   result += merged_intervals[i].get_interval() + " ";
// }
// console.log(`Merged intervals: ${result}`);

// merged_intervals = merge([
//   new Interval(1, 4),
//   new Interval(2, 6),
//   new Interval(3, 5),
// ]);
// result = "";
// for (let i = 0; i < merged_intervals.length; i++) {
//   result += merged_intervals[i].get_interval() + " ";
// }
// console.log(`Merged intervals: ${result}`);



// class Interval {
//   constructor(start, end) {
//     this.start = start;
//     this.end = end;
//   }

//   print_interval() {
//     process.stdout.write(`[${this.start}, ${this.end}]`);
//   }
// }

// const insert = function (intervals, new_interval) {
//   let merged = [];
//   let i = 0;

//   while (i < intervals.length && intervals[i].end < new_interval.start) {
//     merged.push(intervals[i]);
//     i++;
//   }

//   while (i < intervals.length && intervals[i].start <= new_interval.end) {
//     new_interval.start = Math.min(intervals[i].start, new_interval.start);
//     new_interval.end = Math.max(intervals[i].end, new_interval.end);
//     i++;
//   }
//   merged.push(new_interval);

//   while (i < intervals.length) {
//     merged.push(intervals[i]);
//     i++;
//   }
//   return merged;
// };

// process.stdout.write("Intervals after inserting the new interval: ");
// let result = insert(
//   [new Interval(1, 3), new Interval(5, 7), new Interval(8, 12)],
//   new Interval(4, 6)
// );
// for (let i = 0; i < result.length; i++) {
//   result[i].print_interval();
// }
// console.log();

// process.stdout.write("Intervals after inserting the new interval: ");
// result = insert(
//   [new Interval(1, 3), new Interval(5, 7), new Interval(8, 12)],
//   new Interval(4, 10)
// );
// for (let i = 0; i < result.length; i++) {
//   result[i].print_interval();
// }
// console.log();

// process.stdout.write("Intervals after inserting the new interval: ");
// result = insert([new Interval(2, 3), new Interval(5, 7)], new Interval(1, 4));
// for (let i = 0; i < result.length; i++) {
//   result[i].print_interval();
// }
// console.log();
