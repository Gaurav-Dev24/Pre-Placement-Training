// Q 1

function findNextGreaterElements(arr) {
    const result = [];
    const stack = [];
  
    // Iterate over the array in reverse order
    for (let i = arr.length - 1; i >= 0; i--) {
      // Pop elements from the stack smaller than the current element
      while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
        stack.pop();
      }
  
      // If stack is empty, there is no greater element
      if (stack.length === 0) {
        result.unshift(-1); // Add -1 to the beginning of the result array
      } else {
        result.unshift(stack[stack.length - 1]); // Add the next greater element to the beginning of the result array
      }
  
      stack.push(arr[i]); // Push the current element onto the stack
    }
  
    return result;
  }
  
  // Example usage
  const arr = [1, 3, 2, 4];
  const nextGreaterElements = findNextGreaterElements(arr);
  console.log(nextGreaterElements);

//   O/p- [3, 4, 4, -1]

// Q 2

function findNearestSmallerElements(a) {
    const result = [];
    const stack = [];
  
    // Iterate over the array
    for (let i = 0; i < a.length; i++) {
      // Pop elements from the stack greater than or equal to the current element
      while (stack.length > 0 && stack[stack.length - 1] >= a[i]) {
        stack.pop();
      }
  
      // If stack is empty, there is no smaller element on the left
      if (stack.length === 0) {
        result.push(-1); // Add -1 to the result array
      } else {
        result.push(stack[stack.length - 1]); // Add the nearest smaller element to the result array
      }
  
      stack.push(a[i]); // Push the current element onto the stack
    }
  
    return result;
  }
  
  // Example usage
  const a = [1, 6, 2];
  const nearestSmallerElements = findNearestSmallerElements(a);
  console.log(nearestSmallerElements);

  //   O/p- [-1, 1, 1]

// Q 3

class Stack {
    constructor() {
      this.q1 = [];
      this.q2 = [];
    }
  
    push(element) {
      // Push the new element into q1
      this.q1.push(element);
    }
  
    pop() {
      // If q1 is empty, there are no elements to pop
      if (this.q1.length === 0) {
        return null;
      }
  
      // Move all elements except the last one from q1 to q2
      while (this.q1.length > 1) {
        this.q2.push(this.q1.shift());
      }
  
      // Remove and return the last element from q1
      const poppedElement = this.q1.shift();
  
      // Swap q1 and q2 references
      const temp = this.q1;
      this.q1 = this.q2;
      this.q2 = temp;
  
      return poppedElement;
    }
  }
  
  // Example usage
  const stack = new Stack();
  stack.push(2);
  stack.push(3);
  console.log(stack.pop()); // Output: 3
  stack.push(4);
  console.log(stack.pop()); // Output: 4

//   o/p- 
// 3
// 4

// Q 4

class Stack {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      if (this.items.length === 0) {
        return null;
      }
      return this.items.pop();
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    reverse() {
      if (!this.isEmpty()) {
        // Remove the top element from the stack
        const temp = this.pop();
        
        // Reverse the remaining stack
        this.reverse();
  
        // Insert the top element at the bottom of the reversed stack
        this.insertAtBottom(temp);
      }
    }
  
    insertAtBottom(element) {
      if (this.isEmpty()) {
        this.push(element);
      } else {
        // Remove all elements from the stack and insert them at the bottom recursively
        const temp = this.pop();
        this.insertAtBottom(element);
        this.push(temp);
      }
    }
  
    printStack() {
      console.log(this.items);
    }
  }
  
  // Example usage
  const stack = new Stack();
  stack.push(3);
  stack.push(2);
  stack.push(1);
  stack.push(7);
  stack.push(6);
  console.log("Original stack:");
  stack.printStack();
  console.log("Reversed stack:");
  stack.reverse();
  stack.printStack();

//   o/p- 
// Original stack:
// [3, 2, 1, 7, 6]
// Reversed stack:
// [6, 7, 1, 2, 3]

// Q 5

class Stack {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      if (this.items.length === 0) {
        return null;
      }
      return this.items.pop();
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  }
  
  function reverseString(S) {
    const stack = new Stack();
    const reversedString = [];
  
    // Push each character of the string onto the stack
    for (let i = 0; i < S.length; i++) {
      stack.push(S[i]);
    }
  
    // Pop each character from the stack to construct the reversed string
    while (!stack.isEmpty()) {
      reversedString.push(stack.pop());
    }
  
    // Join the characters in the reversed string array and return it
    return reversedString.join('');
  }
  
  // Example usage
  const S = "GeeksforGeeks";
  const reversedString = reverseString(S);
  console.log(reversedString);

//   O/P- 
// skeeGrofskeeG

// Q 6

class Stack {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      if (this.items.length === 0) {
        return null;
      }
      return this.items.pop();
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  }
  
  function evaluatePostfixExpression(S) {
    const stack = new Stack();
  
    // Iterate through each character in the postfix expression
    for (let i = 0; i < S.length; i++) {
      const ch = S[i];
  
      // If the character is a digit, push it onto the stack
      if (!isNaN(ch)) {
        stack.push(parseInt(ch));
      } else {
        // If the character is an operator, pop the top two operands from the stack
        const operand2 = stack.pop();
        const operand1 = stack.pop();
  
        // Perform the operation based on the operator
        let result;
        switch (ch) {
          case '*':
            result = operand1 * operand2;
            break;
          case '/':
            result = operand1 / operand2;
            break;
          case '+':
            result = operand1 + operand2;
            break;
          case '-':
            result = operand1 - operand2;
            break;
          default:
            throw new Error("Invalid operator");
        }
  
        // Push the result back onto the stack
        stack.push(result);
      }
    }
  
    // The final result is the only element left in the stack
    return stack.pop();
  }
  
  // Example usage
  const S = "231*+9-";
  const result = evaluatePostfixExpression(S);
  console.log(result);

// o/p- -4

// Q 7

class MinStack {
    constructor() {
      this.stack = [];
      this.minStack = [];
    }
  
    push(val) {
      this.stack.push(val);
  
      // Update the minimum stack
      if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(val);
      }
    }
  
    pop() {
      const poppedElement = this.stack.pop();
  
      // Update the minimum stack if the popped element was the minimum
      if (poppedElement === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
      }
    }
  
    top() {
      return this.stack[this.stack.length - 1];
    }
  
    getMin() {
      return this.minStack[this.minStack.length - 1];
    }
  }
  
  // Example usage
  const minStack = new MinStack();
  minStack.push(-2);
  minStack.push(0);
  minStack.push(-3);
  console.log(minStack.getMin()); // Output: -3
  minStack.pop();
  console.log(minStack.top()); // Output: 0
  console.log(minStack.getMin()); // Output: -2

//   o/p- 
// -3
// 0
// -2

// Q 8

function trap(height) {
    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let waterTrapped = 0;
  
    while (left < right) {
      if (height[left] < height[right]) {
        // Water can be trapped at the left side
        if (height[left] > leftMax) {
          // Update the left maximum
          leftMax = height[left];
        } else {
          // Calculate the water trapped at the left side
          waterTrapped += leftMax - height[left];
        }
        left++;
      } else {
        // Water can be trapped at the right side
        if (height[right] > rightMax) {
          // Update the right maximum
          rightMax = height[right];
        } else {
          // Calculate the water trapped at the right side
          waterTrapped += rightMax - height[right];
        }
        right--;
      }
    }
  
    return waterTrapped;
  }
  
  // Example usage
  const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
  const waterTrapped = trap(height);
  console.log(waterTrapped);

//   o/p- 6

