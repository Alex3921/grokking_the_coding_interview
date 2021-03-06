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

// class Interval {
//   constructor(start, end) {
//     this.start = start;
//     this.end = end;
//   }

//   print_interval() {
//     process.stdout.write(`[${this.start}, ${this.end}]`);
//   }
// }

// const merge = function (intervals_a, intervals_b) {
//   let result = [];
//   let i = 0;
//   let j = 0;

//   while (i < intervals_a.length && j < intervals_b.length) {
//     let a = intervals_a[i];
//     let b = intervals_b[j];

//     let a_overlaps_b = a.start >= b.start && a.start <= b.end;
//     let b_overlaps_a = b.start >= a.start && b.start <= a.end;

//     if (a_overlaps_b || b_overlaps_a) {
//       result.push(
//         new Interval(Math.max(a.start, b.start), Math.min(a.end, b.end))
//       );
//     }

//     if (a.end < b.end) {
//       i++;
//     } else {
//       j++;
//     }
//   }
//   return result;
// };

// process.stdout.write("Intervals Intersection: ");
// let result = merge(
//   [new Interval(1, 3), new Interval(5, 6), new Interval(7, 9)],
//   [new Interval(2, 3), new Interval(5, 7)]
// );
// for (let i = 0; i < result.length; i++) {
//   result[i].print_interval();
// }
// console.log();

// process.stdout.write("Intervals Intersection: ");
// result = merge(
//   [new Interval(1, 3), new Interval(5, 7), new Interval(9, 12)],
//   [new Interval(5, 10)]
// );
// for (let i = 0; i < result.length; i++) {
//   result[i].print_interval();
// }
// console.log();

// class Interval {
//     constructor(start, end) {
//       this.start = start;
//       this.end = end;
//     }

//     print_interval() {
//       process.stdout.write(`[${this.start}, ${this.end}]`);
//     }
//   }

//   const can_attend_all_appointments = function(intervals) {
//     if(intervals.length < 2) return true;
//     intervals.sort((a, b) => a.start - b.start);
//     // console.log(intervals);
//     for(let i = 1; i < intervals.length; i++) {
//         let prev = intervals[i - 1];
//         let current = intervals[i];
//         if(prev.end > current.start) {
//             return false;
//         }
//     }
//     return true;
//   };

//   console.log(`Can attend all appointments: ${can_attend_all_appointments([
//     new Interval(1, 4),
//     new Interval(2, 5),
//     new Interval(7, 9),
//   ])}`);

//   console.log(`Can attend all appointments: ${can_attend_all_appointments([
//     new Interval(6, 7),
//     new Interval(2, 4),
//     new Interval(8, 12),
//   ])}`);

//   console.log(`Can attend all appointments: ${can_attend_all_appointments([
//     new Interval(1, 2),
//     new Interval(2, 3),
//     new Interval(3, 6),
//   ])}`);

// class Interval {
//   constructor(start, end) {
//     this.start = start;
//     this.end = end;
//   }

//   print_interval() {
//     process.stdout.write(`[${this.start}, ${this.end}]`);
//   }
// }

// const can_attend_all_appointments = function (intervals) {
//   if (intervals.length < 2) return true;
//   intervals.sort((a, b) => a.start - b.start);
//   const result = [];
//   let maxEndInterval = intervals[0];

//   for (let i = 1; i < intervals.length; i++) {
//     let current = intervals[i];
//     if (current.start < maxEndInterval.end) {
//       result.push(current);
//       result.push(maxEndInterval);
//     }
//     if (current.end > maxEndInterval.end) {
//       maxEndInterval = current;
//     }
//   }
//   return result;
// };

// let merged_intervals = can_attend_all_appointments([
//   new Interval(4, 5),
//   new Interval(2, 3),
//   new Interval(3, 6),
//   new Interval(5, 7),
//   new Interval(7, 8),
// ]);
// for (let i = 0; i < merged_intervals.length; i++) {
//   console.log(merged_intervals[i]);
// }

// import Heap from "collections/heap.js";
// class Meeting {
//   constructor(start, end) {
//     this.start = start;
//     this.end = end;
//   }
// }

// function min_meeting_rooms(meetings) {
//   if (meetings.length < 2) return meetings;
//   meetings.sort((a, b) => a.start - b.start);
//   const minHeap = new Heap([], null, (a, b) => b.end - a.end);
//   let minRooms = 0;

//   for (let i = 0; i < meetings.length; i++) {
//     const currentMeeting = meetings[i];
//     while (minHeap.length > 0 && currentMeeting.start >= minHeap.peek().end) {
//       minHeap.pop();
//     }

//     minHeap.push(currentMeeting);
//     minRooms = Math.max(minRooms, minHeap.length);
//   }
//   return minRooms;
// }

// console.log(
//   `Minimum meeting rooms required: ${min_meeting_rooms([
//     new Meeting(4, 5),
//     new Meeting(2, 3),
//     new Meeting(2, 4),
//     new Meeting(3, 5),
//   ])}`
// );
// console.log(
//   `Minimum meeting rooms required: ${min_meeting_rooms([
//     new Meeting(1, 4),
//     new Meeting(2, 5),
//     new Meeting(7, 9),
//   ])}`
// );
// console.log(
//   `Minimum meeting rooms required: ${min_meeting_rooms([
//     new Meeting(6, 7),
//     new Meeting(2, 4),
//     new Meeting(8, 12),
//   ])}`
// );
// console.log(
//   `Minimum meeting rooms required: ${min_meeting_rooms([
//     new Meeting(1, 4),
//     new Meeting(2, 3),
//     new Meeting(3, 6),
//   ])}`
// );
// console.log(
//   `Minimum meeting rooms required: ${min_meeting_rooms([
//     new Meeting(4, 5),
//     new Meeting(2, 3),
//     new Meeting(2, 4),
//     new Meeting(3, 5),
//   ])}`
// );


