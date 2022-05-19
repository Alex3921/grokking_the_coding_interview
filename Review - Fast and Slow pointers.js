// class Node {
//   constructor(value, next=null){
//     this.value = value;
//     this.next = next;
//   }
// }

// const has_cycle = function(head) {
//     if(head === null) return false;
//     let slow = head;
//     let fast = head;
//     while(fast !== null && fast.next !== null) {
//         fast = fast.next.next;
//         slow = slow.next;
//         if(slow === fast) {
//             return true
//         }
//     }

//   return false;
// }

// let head = new Node(1)
// head.next = new Node(2)
// head.next.next = new Node(3)
// head.next.next.next = new Node(4)
// head.next.next.next.next = new Node(5)
// head.next.next.next.next.next = new Node(6)
// console.log(`LinkedList has cycle: ${has_cycle(head)}`)

// head.next.next.next.next.next.next = head.next.next
// console.log(`LinkedList has cycle: ${has_cycle(head)}`)

// head.next.next.next.next.next.next = head.next.next.next
// console.log(`LinkedList has cycle: ${has_cycle(head)}`)

// class Node {
//   constructor(value, next = null) {
//     this.value = value;
//     this.next = next;
//   }
// }

// const find_cycle_start = function (head) {
//   let cycle_length = 0;
//   let fast = head;
//   let slow = head;

//   while (fast !== null && fast.next !== null) {
//     fast = fast.next.next;
//     slow = slow.next;
//     if (fast === slow) {
//       cycle_length = find_cycle_length(slow);
//       break;
//     }
//   }
//   return find_head_start(head, cycle_length);
// };

// function find_cycle_length(head) {
//   let cycle_length = 0;
//   let current = head;
//   while (true) {
//     current = current.next;
//     cycle_length++;
//     if (current === head) {
//       break;
//     }
//   }
//   return cycle_length;
// }

// function find_head_start(head, cycle_length) {
//   let fast = head;
//   let slow = head;

//   while (cycle_length > 0) {
//     fast = fast.next;
//     cycle_length--;
//   }

//   while (fast !== slow) {
//     fast = fast.next;
//     slow = slow.next;
//   }

//   return slow;
// }

// const head = new Node(1);
// head.next = new Node(2);
// head.next.next = new Node(3);
// head.next.next.next = new Node(4);
// head.next.next.next.next = new Node(5);
// head.next.next.next.next.next = new Node(6);

// head.next.next.next.next.next.next = head.next.next;
// console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`);

// head.next.next.next.next.next.next = head.next.next.next;
// console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`);

// head.next.next.next.next.next.next = head;
// console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`);

// const find_happy_number = function (num) {
//   let fast = num;
//   let slow = num;

//   while (true) {
//     fast = find_num(find_num(fast));
//     slow = find_num(slow);
//     if (slow === fast) {
//       break;
//     }
//   }
//   return slow === 1;
// };

// function find_num(num) {
//   let sum = 0;
//   while (num > 0) {
//     let digit = num % 10;
//     sum += digit * digit;
//     num = Math.floor(num / 10);
//   }
//   return sum;
// }

// console.log(`${find_happy_number(23)}`);
// console.log(`${find_happy_number(12)}`);

// class Node {
//   constructor(value, next=null){
//     this.value = value;
//     this.next = next;
//   }
// }

// const find_middle_of_linked_list = function(head) {
//   let fast = head;
//   let slow = head;
//   while(fast !== null && fast.next !== null) {
//     fast = fast.next.next;
//     slow = slow.next;
//   }

//   return slow;
// }

// const head = new Node(1)
// head.next = new Node(2)
// head.next.next = new Node(3)
// head.next.next.next = new Node(4)
// head.next.next.next.next = new Node(5)

// console.log(`Middle Node: ${find_middle_of_linked_list(head).value}`)

// head.next.next.next.next.next = new Node(6)
// console.log(`Middle Node: ${find_middle_of_linked_list(head).value}`)

// head.next.next.next.next.next.next = new Node(7)
// console.log(`Middle Node: ${find_middle_of_linked_list(head).value}`)

// class Node {
//   constructor(value, next = null) {
//     this.value = value;
//     this.next = next;
//   }
// }

// const is_palindromic_linked_list = function (head) {
//   let fast = head;
//   let slow = head;

//   while (fast !== null && fast.next !== null) {
//     fast = fast.next.next;
//     slow = slow.next;
//   }

//   let secondHalf = reverse(slow);
//   let copySecondHalf = secondHalf;

//   while (head !== null && secondHalf !== null) {
//     if (head.value !== secondHalf.value) {
//       break;
//     }

//     head = head.next;
//     secondHalf = secondHalf.next;
//   }
//   reverse(copySecondHalf);

//   if (head === null || secondHalf === null) {
//     return true;
//   }
//   return false;
// };

// function reverse(head) {
//   let prev = null;
//   while (head !== null) {
//     let next = head.next;
//     head.next = prev;
//     prev = head;
//     head = next;
//   }
//   return prev;
// }

// let head = new Node(2);
// head.next = new Node(4);
// head.next.next = new Node(6);
// head.next.next.next = new Node(4);
// head.next.next.next.next = new Node(2);

// console.log(`Is palindrome: ${is_palindromic_linked_list(head)}`);

// head.next.next.next.next.next = new Node(2);
// console.log(`Is palindrome: ${is_palindromic_linked_list(head)}`);

// class Node {
//   constructor(value, next = null) {
//     this.value = value;
//     this.next = next;
//   }

//   print_list() {
//     let result = "";
//     let temp = this;
//     while (temp !== null) {
//       result += temp.value + " ";
//       temp = temp.next;
//     }
//     console.log(result);
//   }
// }

// const reorder = function (head) {
//   let slow = head;
//   let fast = head;

//   while (fast !== null && fast.next !== null) {
//     fast = fast.next.next;
//     slow = slow.next;
//   }

//   let secondHalf = reverse(slow);
//   let firstHalf = head;

//   while (firstHalf !== null && secondHalf !== null) {
//     let temp = firstHalf.next;
//     firstHalf.next = secondHalf;
//     firstHalf = temp;

//     temp = secondHalf.next;
//     secondHalf.next = firstHalf;
//     secondHalf = temp;
//   }

//   if (firstHalf.next !== null) {
//     firstHalf.next = null;
//   }

//   return firstHalf;
// };

// function reverse(head) {
//   let prev = null;
//   while (head !== null) {
//     let next = head.next;
//     head.next = prev;
//     prev = head;
//     head = next;
//   }
//   return prev;
// }

// let head = new Node(2);
// head.next = new Node(4);
// head.next.next = new Node(6);
// head.next.next.next = new Node(8);
// head.next.next.next.next = new Node(10);
// head.next.next.next.next.next = new Node(12);
// reorder(head);
// head.print_list();

// function find_cycle(arr) {
//   let n = arr.length;
//   if (n <= 1) return false;

//   for (let i = 0; i < n; i++) {
//     let fast = i;
//     let slow = i;
//     let isForward = arr[i] > 0;
//     while (true) {
//       slow = get_next_valid_index(arr, slow, isForward);
//       if (slow === -1) break;

//       fast = get_next_valid_index(arr, fast, isForward);
//       if (fast === -1) break;
//       fast = get_next_valid_index(arr, fast, isForward);
//       if (fast === -1) break;

//       if (fast === slow) return true;
//     }
//   }
//   return false;
// }

// function get_next_valid_index(arr, index, isForward) {
//   let direction = arr[index] > 0;
//   if (direction !== isForward) return -1;

//   let nextIndex = (arr[index] + index) % arr.length;

//   if (nextIndex < 0) {
//     nextIndex += arr.length;
//   }

//   if (nextIndex === index) return -1;
//   return nextIndex;
// }

// console.log(find_cycle([1, 2, -1, 2, 2]));
// console.log(find_cycle([2, 2, -1, 2]));
// console.log(find_cycle([2, 1, -1, -2]));


