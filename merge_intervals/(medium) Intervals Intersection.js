// Statement:
// Given two lists of intervals, find the intersection of these two lists. 
// Each list consists of disjoint intervals sorted on their start time.


// Example 1:

// Input: arr1=[[1, 3], [5, 6], [7, 9]], arr2=[[2, 3], [5, 7]]
// Output: [2, 3], [5, 6], [7, 7]
// Explanation: The output list contains the common intervals between the two lists.
// Example 2:

// Input: arr1=[[1, 3], [5, 7], [9, 12]], arr2=[[5, 10]]
// Output: [5, 7], [9, 10]
// Explanation: The output list contains the common intervals between the two lists.


class Interval {
    constructor(start, end) {
      this.start = start;
      this.end = end;
    }
  
    print_interval() {
      process.stdout.write(`[${this.start}, ${this.end}]`);
    }
  }
  
  const merge = function(intervals_a, intervals_b) {
    let result = [];
    let indexA = 0,
        indexB = 0,
        start, end;

    while(indexA < intervals_a.length && indexB < intervals_b.length) {
        if(intervals_a[indexA].start <= intervals_b[indexB].end && intervals_b[indexB].start <= intervals_a[indexA].end) {
            start = Math.max(intervals_a[indexA].start, intervals_b[indexB].start);
            end = Math.min(intervals_a[indexA].end, intervals_b[indexB].end);
            result.push(new Interval(start, end));
        }

        if(intervals_a[indexA].end > intervals_b[indexB].end) {
            indexB++;
        } else {
            indexA++;
        }

    }
    return result;
  };

//   Time complexity: O(n+m)
//   Space complexity: O(1) -- ignoring the space needed for the result list

  process.stdout.write('Intervals Intersection: ');
  let result = merge([new Interval(1, 3), new Interval(5, 6), new Interval(7, 9)], [new Interval(2, 3), new Interval(5, 7)]);
  for (i = 0; i < result.length; i++) {
    result[i].print_interval();
  }
  console.log();
  
  process.stdout.write('Intervals Intersection: ');
  result = merge([new Interval(1, 3), new Interval(5, 7), new Interval(9, 12)], [new Interval(5, 10)]);
  for (i = 0; i < result.length; i++) {
    result[i].print_interval();
  }
  console.log();