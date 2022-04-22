class minHeap {
  constructor() {
    this.heap = [null];
  }
  insert = function (num) {
    //add element to the end of the heap
    this.heap.push(num);
    if (this.heap.length > 2) {
      let index = this.heap.length - 1;
      // check if parent element is bigger than the new element
      while (this.heap[index] < this.heap[Math.floor(index / 2)]) {
        if (index >= 1) {
          // swap them if they are bigger
          // we use ES6 destructuring syntax
          [this.heap[Math.floor(index / 2)], this.heap[index]] = [
            this.heap[index],
            this.heap[Math.floor(index / 2)],
          ];
          // check if index is still bigger than 1
          if (Math.floor(index / 2) > 1) {
            // set it to new position
            index = Math.floor(index / 2);
          } else {
            break;
          }
        }
      }
    }
  };

  remove = function () {
    let smallest = this.heap[1];
    if (this.heap.length > 2) {
      // remove smallest by reassigning head of heap to the last element in heap
      this.heap[1] = this.heap[this.heap.length - 1];
      // remove last element
      this.heap.splice(this.heap.length - 1);
      // if there are only 2 elements
      if (this.heap.length === 3) {
        // if first > second
        if (this.heap[1] > this.heap[2]) {
          // swap them
          [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
        }
        return smallest;
      }
      let i = 1;
      let left = i * 2;
      let right = i * 2 + 1;
      // as long as parent is grater or equal to left or right child
      while (
        this.heap[i] >= this.heap[left] ||
        this.heap[i] >= this.heap[right]
      ) {
        // check which child is smaller
        if (this.heap[left] < this.heap[right]) {
          // swap smaller child with parent
          [this.heap[i], this.heap[left]] = [this.heap[left], this.heap[i]];
          // update index position
          i = 2 * i;
        } else {
          [this.heap[i], this.heap[right]] = [this.heap[right], this.heap[i]];
          i = 2 * i + 1;
        }
        // update left and right children
        left = 2 * i;
        right = 2 * i + 1;
        // check if we reached the bottom of the tree
        if (this.heap[left] === undefined || this.heap[right] === undefined) {
          break;
        }
      }
      // if heap has only 1 element
    } else if (this.heap.length === 2) {
      // remove it
      this.heap.splice(1, 1);
      // if heap is empty return null
    } else {
      return null;
    }
    return smallest;
  };

  sort = function () {
    let result = new Array();
    while (this.heap.length > 1) {
      result.push(this.remove());
    }
    return result;
  };
}

let minH = new minHeap();
minH.insert(3);
minH.insert(5);
minH.insert(7);
minH.insert(9);
minH.insert(10);
minH.insert(2);
minH.insert(1);
minH.insert(22);
minH.insert(4);
minH.insert(6);
console.log(minH.sort());
