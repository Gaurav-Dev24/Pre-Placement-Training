// Implement a stack using an array in JavaScript. Include the necessary methods such as push, pop, and isEmpty.

class Stack {
    constructor() {
      this.stack = [];
    }
  
    push(element) {
      this.stack.push(element);
    }
  
    pop() {
      if (this.isEmpty()) {
        return "Stack is empty. Cannot perform pop operation.";
      }
      return this.stack.pop();
    }
  
    isEmpty() {
      return this.stack.length === 0;
    }
  }

var stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.pop()); // Output: 30
console.log(stack.isEmpty()); // Output: false
console.log(stack.pop()); // Output: 20
console.log(stack.pop()); // Output: 10
console.log(stack.pop()); // Output: Stack is empty. Cannot perform pop operation.
console.log(stack.isEmpty()); // Output: true


