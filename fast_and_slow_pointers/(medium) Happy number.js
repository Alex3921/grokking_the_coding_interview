// Statement:
// Any number will be called a happy number if, after repeatedly
// replacing it with a number equal to the sum of the square of
// all of its digits, leads us to number ‘1’. All other (not-happy)
// numbers will never reach ‘1’. Instead, they will be stuck in a
// cycle of numbers which does not include ‘1’.

const find_happy_number = function (num) {
  let slow = num,
    fast = num;

  while (true) {
    slow = find_square_sum(slow);
    fast = find_square_sum(find_square_sum(fast));

    if (fast === slow) {
      break;
    }
  }
  return slow === 1;
};

const find_square_sum = function (num) {
  let sum = 0;

  while (num > 0) {
    digit = num % 10;
    sum += digit * digit;
    num = Math.floor(num / 10);
  }

  return sum;
};

/*
The time complexity of the algorithm is difficult to determine. However we know the fact that all unhappy numbers eventually get stuck in the cycle: 4 -> 16 -> 37 -> 58 -> 89 -> 145 -> 42 -> 20 -> 4

This sequence behavior tells us two things:

If the number N
N
 is less than or equal to 1000, then we reach the cycle or ‘1’ in at most 1001 steps.
For N > 1000
N>1000
, suppose the number has ‘M’ digits and the next number is ‘N1’. From the above Wikipedia link, we know that the sum of the squares of the digits of ‘N’ is at most 9^2M
9 
2
 M
, or 81M
81M
 (this will happen when all digits of ‘N’ are ‘9’).
This means:

N1 < 81M
N1<81M
As we know M = log(N+1)
M=log(N+1)
Therefore: N1 < 81 * log(N+1)
N1<81∗log(N+1)
 => N1 = O(logN)
N1=O(logN)
This concludes that the above algorithm will have a time complexity of O(logN)
O(logN)
.

Space Complexity#
The algorithm runs in constant space O(1)
*/
console.log(`${find_happy_number(23)}`);
console.log(`${find_happy_number(12)}`);
