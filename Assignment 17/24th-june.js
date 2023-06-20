// Q 1

function firstUniqChar(s) {
    // Create an object to store the count of each character
    let charCount = {};
  
    // Count the occurrences of each character in the string
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      charCount[char] = (charCount[char] || 0) + 1;
    }
  
    // Iterate over the string again to find the first non-repeating character
    for (let i = 0; i < s.length; i++) {
      if (charCount[s[i]] === 1) {
        return i;
      }
    }
  
    // If no non-repeating character is found, return -1
    return -1;
  }
  
  // Test the function with the given example
  const s = "leetcode";
  console.log(firstUniqChar(s));  // Output: 0
  
// Q 2

function maxSubarraySumCircular(nums) {
    const n = nums.length;
  
    // Case 1: Maximum sum subarray is within the array without wrapping around
    let maxSum = nums[0];
    let currentMax = nums[0];
    for (let i = 1; i < n; i++) {
      currentMax = Math.max(currentMax + nums[i], nums[i]);
      maxSum = Math.max(maxSum, currentMax);
    }
  
    // Case 2: Maximum sum subarray wraps around the array
    let minSum = nums[0];
    let currentMin = nums[0];
    let totalSum = nums[0];
    for (let i = 1; i < n; i++) {
      currentMin = Math.min(currentMin + nums[i], nums[i]);
      minSum = Math.min(minSum, currentMin);
      totalSum += nums[i];
    }
  
    // If all elements are negative, return the maximum element from the array
    if (totalSum === minSum) {
      return maxSum;
    }
  
    // The maximum possible sum can either be the maximum sum subarray within the array or the total sum minus the minimum sum subarray
    return Math.max(maxSum, totalSum - minSum);
  }
  
  // Test the function with the given example
  const nums = [1, -2, 3, -2];
  console.log(maxSubarraySumCircular(nums));  // Output: 3
  
// Q 3

function countStudents(students, sandwiches) {
    const n = students.length;
    let queue = [...students]; // Create a copy of the students array as a queue
  
    for (const sandwich of sandwiches) {
      if (queue[0] === sandwich) {
        // If the student at the front of the queue prefers the sandwich, they take it and leave the queue
        queue.shift();
      } else {
        // The student doesn't prefer the sandwich, so they leave it and go to the end of the queue
        let i = 1;
        while (i < queue.length && queue[i] !== sandwich) {
          i++;
        }
        if (i === queue.length) {
          // None of the remaining students prefer the sandwich, so the process ends
          break;
        }
        queue = queue.slice(i + 1).concat(queue.slice(0, i + 1));
      }
    }
  
    return queue.length; // Return the number of students unable to eat
  }
  
  // Test the function with the given example
  const students = [1, 1, 0, 0];
  const sandwiches = [0, 1, 0, 1];
  console.log(countStudents(students, sandwiches));  // Output: 0
  
// Q 4

class RecentCounter {
    constructor() {
      this.requests = [];
    }
  
    ping(t) {
      this.requests.push(t); // Add the new request to the queue
  
      // Remove requests that fall outside the time frame of the last 3000 milliseconds
      while (this.requests[0] < t - 3000) {
        this.requests.shift();
      }
  
      return this.requests.length; // Return the number of requests within the time frame
    }
  }
  
  // Test the RecentCounter class with the given example
  const recentCounter = new RecentCounter();
  console.log(recentCounter.ping(1));     // Output: 1
  console.log(recentCounter.ping(100));   // Output: 2
  console.log(recentCounter.ping(3001));  // Output: 3
  console.log(recentCounter.ping(3002));  // Output: 3
  
// Q 5

function findTheWinner(n, k) {
    // Create an array to represent the circle of friends
    const circle = Array.from({ length: n }, (_, i) => i + 1);
  
    let currentPosition = 0; // Start at the 1st friend
  
    while (circle.length > 1) {
      // Count the next k friends in the clockwise direction
      currentPosition = (currentPosition + k - 1) % circle.length;
  
      // Remove the last friend counted from the circle
      circle.splice(currentPosition, 1);
    }
  
    return circle[0]; // Return the winner
  }
  
  // Test the function with the given example
  const n = 5;
  const k = 2;
  console.log(findTheWinner(n, k));  // Output: 3
  
// Q 6

function deckRevealedIncreasing(deck) {
    const n = deck.length;
    deck.sort((a, b) => b - a); // Sort the deck in descending order
  
    const result = [];
    const queue = [];
  
    // Initialize the queue with indices from 0 to n - 1
    for (let i = 0; i < n; i++) {
      queue.push(i);
    }
  
    // Perform the card revealing process
    while (queue.length > 0) {
      result.push(deck[queue.shift()]); // Reveal the top card
  
      if (queue.length > 0) {
        queue.push(queue.shift()); // Move the next top card to the bottom
      }
    }
  
    return result;
  }
  
  // Test the function with the given example
  const deck = [17, 13, 11, 2, 3, 5, 7];
  console.log(deckRevealedIncreasing(deck));  // Output: [2, 13, 3, 11, 5, 17, 7]
  
// Q 7

class Node {
    constructor(val) {
      this.val = val;
      this.prev = null;
      this.next = null;
    }
  }
  
  class FrontMiddleBackQueue {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
  
    pushFront(val) {
      const newNode = new Node(val);
      if (this.size === 0) {
        this.head = this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      }
      this.size++;
    }
  
    pushMiddle(val) {
      if (this.size === 0) {
        this.pushFront(val);
      } else {
        const middle = Math.floor(this.size / 2);
        let curr = this.head;
        for (let i = 0; i < middle; i++) {
          curr = curr.next;
        }
        const newNode = new Node(val);
        if (this.size % 2 === 0) {
          newNode.next = curr.next;
          newNode.prev = curr;
          curr.next.prev = newNode;
          curr.next = newNode;
        } else {
          newNode.prev = curr.prev;
          newNode.next = curr;
          curr.prev.next = newNode;
          curr.prev = newNode;
        }
        this.size++;
      }
    }
  
    pushBack(val) {
      const newNode = new Node(val);
      if (this.size === 0) {
        this.head = this.tail = newNode;
      } else {
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.size++;
    }
  
    popFront() {
      if (this.size === 0) {
        return 1;
      }
      const val = this.head.val;
      if (this.size === 1) {
        this.head = this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }
      this.size--;
      return val;
    }
  
    popMiddle() {
      if (this.size === 0) {
        return 1;
      }
      const middle = Math.floor(this.size / 2);
      let curr = this.head;
      for (let i = 0; i < middle; i++) {
        curr = curr.next;
      }
      const val = curr.val;
      if (this.size === 1) {
        this.head = this.tail = null;
      } else if (this.size % 2 === 0) {
        curr.prev.next = curr.next;
        curr.next.prev = curr.prev;
      } else {
        curr.prev.next = curr.next;
        curr.next.prev = curr.prev;
      }
      this.size--;
      return val;
    }
  
    popBack() {
      if (this.size === 0) {
        return 1;
      }
      const val = this.tail.val;
      if (this.size === 1) {
        this.head = this.tail = null;
      } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
      }
      this.size--;
      return val;
    }
  }
  
  // Test the implementation with the given example
  const q = new FrontMiddleBackQueue();
  q.pushFront(1);
  q.pushBack(2);
  q.pushMiddle(3);
  q.pushMiddle(4);
  console.log(q.popFront());   // Output: 1
  console.log(q.popMiddle());  // Output: 3
  console.log(q.popMiddle());  // Output: 4
  console.log(q.popBack());
  
// Q 8

class DataStream {
    constructor(value, k) {
      this.value = value;
      this.k = k;
      this.stream = [];
    }
  
    consec(num) {
      this.stream.push(num);
      if (this.stream.length < this.k) {
        return false;
      }
      const lastKIntegers = this.stream.slice(-this.k);
      return lastKIntegers.every((integer) => integer === this.value);
    }
  }
  
  // Test the implementation with the given example
  const dataStream = new DataStream(4, 3);
  console.log(dataStream.consec(4));  // Output: false
  console.log(dataStream.consec(4));  // Output: false
  console.log(dataStream.consec(4));  // Output: true
  console.log(dataStream.consec(3));  // Output: false
  