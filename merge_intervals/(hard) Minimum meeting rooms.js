// Statement:
// Given a list of intervals representing the start and end time
// of ‘N’ meetings, find the minimum number of rooms required to hold all the meetings.
const Heap = require('./collections/heap');
class Meeting {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

// const min_meeting_rooms = function (meetings) {
//   const start = [];
//   const end = [];
//   let result = 0;
//   let count = 0;
//   let s = 0;
//   let e = 0;

//   for (let m of meetings) start.push(m.start), end.push(m.end);
//   start.sort((a, b) => a - b);
//   end.sort((a, b) => a - b);

//   while (s < meetings.length) {
//     if (start[s] < end[e]) {
//       s++;
//       count++;
//     } else {
//       e++;
//       count--;
//     }
//     result = Math.max(result, count);
//   }

//   return result;
// };

const min_meeting_rooms = function (meetings) {
  meetings.sort((a,b) => a.start - b.start)
  const minHeap = new Heap([], null, ((a,b) => b.end - a.end));
  let minRooms = 0;

  for(let i = 0; i < meetings.length; i++) {
    // remove all the meetings that have ended
    while(minHeap.length > 0 && meetings[i].start >= minHeap.peek().end) {
      minHeap.pop();
    }

    // add current meeting into minHeap
    minHeap.push(meetings[i]);
    // all active meetings are in the min_heap, so we need rooms for all of them
    minRooms = Math.max(minRooms, minHeap.length);
  }
  return minRooms;
}

console.log(
  `Minimum meeting rooms required: ${min_meeting_rooms([
    new Meeting(4, 5),
    new Meeting(2, 3),
    new Meeting(2, 4),
    new Meeting(3, 5),
  ])}`
);
console.log(
  `Minimum meeting rooms required: ${min_meeting_rooms([
    new Meeting(1, 4),
    new Meeting(2, 5),
    new Meeting(7, 9),
  ])}`
);
console.log(
  `Minimum meeting rooms required: ${min_meeting_rooms([
    new Meeting(6, 7),
    new Meeting(2, 4),
    new Meeting(8, 12),
  ])}`
);
console.log(
  `Minimum meeting rooms required: ${min_meeting_rooms([
    new Meeting(1, 4),
    new Meeting(2, 3),
    new Meeting(3, 6),
  ])}`
);
console.log(
  `Minimum meeting rooms required: ${min_meeting_rooms([
    new Meeting(4, 5),
    new Meeting(2, 3),
    new Meeting(2, 4),
    new Meeting(3, 5),
  ])}`
);
