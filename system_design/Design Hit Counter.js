// Design a hit counter which counts the number of hits received in the past 5 minutes (i.e., the past 300 seconds).

// Your system should accept a timestamp parameter (in seconds granularity), and you may assume that calls are being made to the system in chronological order (i.e., timestamp is monotonically increasing). Several hits may arrive roughly at the same time.

// Implement the HitCounter class:

// HitCounter() Initializes the object of the hit counter system.
// void hit(int timestamp) Records a hit that happened at timestamp (in seconds). Several hits may happen at the same timestamp.
// int getHits(int timestamp) Returns the number of hits in the past 5 minutes from timestamp (i.e., the past 300 seconds).

class HitCounter {
  constructor() {
    this.queue = [];
  }

  // add timestamp to the queue
  hit(timestamp) {
    this.queue.push({ timestamp });
  }

  // check for hits that happened in the previous 5 minutes
  getHits(timestamp) {
    while (
      this.queue.length > 0 &&
      timestamp - this.queue[0].timestamp >= 300
    ) {
      this.queue.shift();
    }
    console.log(this.queue.length);
    return this.queue.length;
  }
}

// Time complexity: O(N)
// Space complexity: O(N)

const hitCounter = new HitCounter();
hitCounter.hit(1);
hitCounter.hit(2);
hitCounter.hit(3);
hitCounter.getHits(4);
hitCounter.hit(300);
hitCounter.getHits(3012);