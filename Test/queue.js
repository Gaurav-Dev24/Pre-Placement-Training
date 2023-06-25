// Implement a queue using an array in JavaScript. Include the necessary methods such as enqueue, dequeue, and isEmpty.

class Queue {
    constructor() {
      this.queue = [];
    }
  
    enqueue(element) {
      this.queue.push(element);
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return "Queue is empty. Cannot perform dequeue operation.";
      }
      return this.queue.shift();
    }
  
    isEmpty() {
      return this.queue.length === 0;
    }
  }

  var queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.dequeue()); // Output: 10
console.log(queue.isEmpty()); // Output: false
console.log(queue.dequeue()); // Output: 20
console.log(queue.dequeue()); // Output: 30
console.log(queue.dequeue()); // Output: Queue is empty. Cannot perform dequeue operation.
console.log(queue.isEmpty()); // Output: true
