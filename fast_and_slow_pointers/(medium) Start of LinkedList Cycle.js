// Statement:
// Given the head of a Singly LinkedList that contains a cycle, 
// write a function to find the starting node of the cycle.

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

const find_cycle_start = function(head){
    let slow = head,
        fast = head,
        cycle_length;

    while(fast !== null && fast.next !== null){
        fast = fast.next.next;
        slow = slow.next;
        if(fast === slow) {
            cycle_length = find_cycle_length(slow)
            break;
        }
    }

    return find_start(head, cycle_length);
}

const find_cycle_length = function(head) {
    let current = head,
        cycle_length = 0;

    while(true) {
        current = current.next;
        cycle_length++;
        if(current === head) {
            break;
        }
    }
    return cycle_length;
}


const find_start = function(head, cycle_length) {
    let slow = head,
        fast = head;

    while(cycle_length > 0) {
        fast = fast.next;
        cycle_length--;
    }

    while(fast !== slow) {
        fast = fast.next;
        slow = slow.next;
    }
    return slow;
}

// Time complexity: O(n)
// Space complexity: O(n)


head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)

head.next.next.next.next.next.next = head.next.next
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)

head.next.next.next.next.next.next = head.next.next.next
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)

head.next.next.next.next.next.next = head
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)