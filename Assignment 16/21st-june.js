// Q 1

function findNextGreaterFrequency(arr) {
    const frequencyMap = new Map(); // To store the frequency of each element
    const result = new Array(arr.length); // To store the result
  
    // Count the frequency of each element
    for (let i = 0; i < arr.length; i++) {
      const num = arr[i];
      frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }
  
    // Find the next greater frequency for each element
    for (let i = 0; i < arr.length; i++) {
      const num = arr[i];
      let found = false;
  
      // Search for the next greater frequency
      for (let j = i + 1; j < arr.length; j++) {
        if (frequencyMap.get(arr[j]) > frequencyMap.get(num)) {
          result[i] = arr[j];
          found = true;
          break;
        }
      }
  
      if (!found) {
        result[i] = -1;
      }
    }
  
    return result;
  }
  
  // Example usage
  const arr = [1, 1, 2, 3, 4, 2, 1];
  const output = findNextGreaterFrequency(arr);
  console.log(output); // [-1, -1, 1, 2, 2, 1, -1]
  
// Q 2

function sortStack(stack) {
    const tempStack = [];
  
    while (stack.length > 0) {
      const temp = stack.pop();
  
      while (tempStack.length > 0 && tempStack[tempStack.length - 1] > temp) {
        stack.push(tempStack.pop());
      }
  
      tempStack.push(temp);
    }
  
    return tempStack;
  }
  
  // Example usage
  const stack1 = [34, 3, 31, 98, 92, 23];
  const sortedStack1 = sortStack(stack1);
  console.log(sortedStack1); // [3, 23, 31, 34, 92, 98]
  
  const stack2 = [3, 5, 1, 4, 2, 8];
  const sortedStack2 = sortStack(stack2);
  console.log(sortedStack2); // [1, 2, 3, 4, 5, 8]
  
// Q 3

function deleteMiddleElement(stack, k) {
    // Base case: If the stack is empty or we have reached the middle element
    if (stack.length === 0 || k === 0) {
      stack.pop();
      return;
    }
  
    // Remove the top element and recursively process the remaining stack
    const temp = stack.pop();
    deleteMiddleElement(stack, k - 1);
  
    // Push the top element back to the stack
    stack.push(temp);
  }
  
  function deleteMiddle(stack) {
    const k = Math.floor(stack.length / 2) + 1; // Calculate the middle element position
    deleteMiddleElement(stack, k);
  }
  
  // Example usage
  const stack1 = [1, 2, 3, 4, 5];
  deleteMiddle(stack1);
  console.log(stack1); // [1, 2, 4, 5]
  
  const stack2 = [1, 2, 3, 4, 5, 6];
  deleteMiddle(stack2);
  console.log(stack2); // [1, 2, 4, 5, 6]
  
// Q 4

function checkArrangement(queue) {
    const stack = [];
    const secondQueue = [];
    let expected = 1;
  
    while (queue.length > 0) {
      if (queue[0] === expected) {
        secondQueue.push(queue.shift());
        expected++;
      } else {
        if (stack.length === 0 || stack[stack.length - 1] > queue[0]) {
          stack.push(queue.shift());
        } else {
          return "No";
        }
      }
    }
  
    while (stack.length > 0) {
      if (stack[stack.length - 1] === expected) {
        secondQueue.push(stack.pop());
        expected++;
      } else {
        return "No";
      }
    }
  
    return queue.length === 0 && secondQueue.length === 0 ? "Yes" : "No";
  }
  
  // Example usage
  const queue1 = [5, 1, 2, 3, 4];
  console.log(checkArrangement(queue1)); // Yes
  
  const queue2 = [5, 1, 2, 6, 3, 4];
  console.log(checkArrangement(queue2)); // No
  
// Q 5

function reverseNumber(number) {
    const numberString = number.toString();
    const stack = [];
    let result = "";
  
    for (let i = 0; i < numberString.length; i++) {
      stack.push(numberString[i]);
    }
  
    while (stack.length > 0) {
      result += stack.pop();
    }
  
    return parseInt(result);
  }
  
  // Example usage
  const number1 = 365;
  console.log(reverseNumber(number1)); // 563
  
  const number2 = 6899;
  console.log(reverseNumber(number2)); // 9986
  
// Q 6

function reverseK(queue, k) {
    const stack = [];
  
    // Step 1: Dequeue and push the first k elements onto the stack
    for (let i = 0; i < k; i++) {
      stack.push(queue.dequeue());
    }
  
    // Step 2: Enqueue the elements from the stack back into the queue
    while (stack.length > 0) {
      queue.enqueue(stack.pop());
    }
  
    // Step 3: Dequeue the remaining elements from the front of the queue and enqueue them again
    for (let i = 0; i < queue.size() - k; i++) {
      queue.enqueue(queue.dequeue());
    }
  }
  
  // Example usage
  class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(item) {
      this.items.push(item);
    }
  
    dequeue() {
      if (this.items.length === 0) {
        return "Queue is empty";
      }
      return this.items.shift();
    }
  
    size() {
      return this.items.length;
    }
  
    front() {
      if (this.items.length === 0) {
        return "Queue is empty";
      }
      return this.items[0];
    }
  }
  
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.enqueue(4);
  queue.enqueue(5);
  
  reverseK(queue, 3);
  console.log(queue.front()); // 3
  
// Q 7

function countWordsLeft(sequence) {
    const stack = [];
  
    for (let i = 0; i < sequence.length; i++) {
      const currentWord = sequence[i];
  
      if (stack.length === 0 || currentWord !== stack[stack.length - 1]) {
        stack.push(currentWord);
      } else {
        stack.pop();
      }
    }
  
    return stack.length;
  }
  
  // Example usage
  const sequence1 = ["ab", "aa", "aa", "bcd", "ab"];
  console.log(countWordsLeft(sequence1)); // 3
  
  const sequence2 = ["tom", "jerry", "jerry", "tom"];
  console.log(countWordsLeft(sequence2)); // 0
  
// Q 8

function findMaxAbsoluteDifference(arr) {
    const n = arr.length;
    
    // Step 1: Initialize variables
    const leftSmaller = new Array(n).fill(0);
    const rightSmaller = new Array(n).fill(0);
    const stack = [];
  
    // Step 2: Calculate leftSmaller array
    for (let i = 0; i < n; i++) {
      while (stack.length > 0 && stack[stack.length - 1] >= arr[i]) {
        stack.pop();
      }
      leftSmaller[i] = stack.length > 0 ? stack[stack.length - 1] : 0;
      stack.push(arr[i]);
    }
    
    // Step 3: Clear the stack
    stack.length = 0;
    
    // Step 4: Calculate rightSmaller array
    for (let i = n - 1; i >= 0; i--) {
      while (stack.length > 0 && stack[stack.length - 1] >= arr[i]) {
        stack.pop();
      }
      rightSmaller[i] = stack.length > 0 ? stack[stack.length - 1] : 0;
      stack.push(arr[i]);
    }
    
    // Step 5: Find the maximum difference
    let maxDiff = 0;
    for (let i = 0; i < n; i++) {
      const diff = Math.abs(leftSmaller[i] - rightSmaller[i]);
      maxDiff = Math.max(maxDiff, diff);
    }
    
    // Step 6: Return the maximum difference
    return maxDiff;
  }
  
  // Test cases
  const arr1 = [2, 1, 8];
  console.log(findMaxAbsoluteDifference(arr1)); // Output: 1
  
  const arr2 = [2, 4, 8, 7, 7, 9, 3];
  console.log(findMaxAbsoluteDifference(arr2)); // Output: 4
  
  const arr3 = [5, 1, 9, 2, 5, 1, 7];
  console.log(findMaxAbsoluteDifference(arr3)); // Output: 1
  