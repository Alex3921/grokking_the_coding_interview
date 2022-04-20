// Statement:
// Given the head of a LinkedList with a cycle, find the length of the cycle.

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}


function find_cycle_length(head) {
    let slow = head,
    fast = head;

    while(fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
        if(fast === slow) {
            return find_length(slow)
        }
    }
    return 0;
}


function find_length(head) {
    let cycle_length = 0,
        current = head;

    while(true) {
        current = current.next;
        cycle_length++;
        if(current === head) {
            break
        }
    }
    return cycle_length;
} 


const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = head.next.next;
console.log(`LinkedList cycle length: ${find_cycle_length(head)}`);

head.next.next.next.next.next.next = head.next.next.next;
console.log(`LinkedList cycle length: ${find_cycle_length(head)}`);