// Q 1

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function detectAndRemoveLoop(head) {
  // Step 1: Detect if there is a loop in the linked list
  let slow = head;
  let fast = head;
  let loopDetected = false;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      loopDetected = true;
      break;
    }
  }

  // Step 2: If a loop is detected, find the starting point of the loop
  if (loopDetected) {
    slow = head;
    while (slow !== fast) {
      slow = slow.next;
      fast = fast.next;
    }

    // Step 3: Remove the loop by setting the next pointer of the last node in the loop to null
    let lastNode = slow;
    while (lastNode.next !== slow) {
      lastNode = lastNode.next;
    }
    lastNode.next = null;
  }

  return head;
}

// Example 1
let head = new ListNode(1);
head.next = new ListNode(3);
head.next.next = new ListNode(4);
head.next.next.next = head.next;

let resultOne = detectAndRemoveLoop(head);
printLinkedList(resultOne); // Output: 1 -> 3 -> 4

// Helper function to print the linked list
function printLinkedList(head) {
  let values = [];
  while (head) {
    values.push(head.val);
    head = head.next;
  }
  console.log(values.join(" -> "));
}

// Q 2

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function addOne(head) {
  let dummy = new ListNode(0);
  dummy.next = head;

  let curr = head;
  let lastNonNine = dummy;

  // Find the rightmost non-9 digit
  while (curr) {
    if (curr.val !== 9) {
      lastNonNine = curr;
    }
    curr = curr.next;
  }

  // Increment the value of the rightmost non-9 digit
  lastNonNine.val += 1;

  // Set all the following digits to 0
  curr = lastNonNine.next;
  while (curr) {
    curr.val = 0;
    curr = curr.next;
  }

  // If the first digit is now 0, insert a new node with value 1 at the beginning
  if (dummy.val === 0) {
    let newHead = new ListNode(1);
    newHead.next = dummy.next;
    return newHead;
  }

  return dummy.next;
}

// Example 1
let head = new ListNode(4);
head.next = new ListNode(5);
head.next.next = new ListNode(6);

let resultTwo = addOne(head);
printLinkedList(resultTwo); // Output: 4 -> 5 -> 7

// Helper function to print the linked list
function printLinkedList(head) {
  let values = [];
  while (head) {
    values.push(head.val);
    head = head.next;
  }
  console.log(values.join(" -> "));
}

// Q 3

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.bottom = null;
  }
}

function flattenLinkedList(head) {
  // Base case: If the head is null or the next pointer is null, return the head
  if (!head || !head.next) {
    return head;
  }

  // Recursively flatten the rest of the list
  head.next = flattenLinkedList(head.next);

  // Merge the current list with the flattened list
  head = merge(head, head.next);

  return head;
}

function merge(head1, head2) {
  // Create a dummy node to store the merged list
  let dummy = new Node(0);
  let tail = dummy;

  // Merge the two sorted lists
  while (head1 && head2) {
    if (head1.data < head2.data) {
      tail.bottom = head1;
      head1 = head1.bottom;
    } else {
      tail.bottom = head2;
      head2 = head2.bottom;
    }
    tail = tail.bottom;
  }

  // Attach the remaining nodes
  if (head1) {
    tail.bottom = head1;
  } else {
    tail.bottom = head2;
  }

  return dummy.bottom;
}

// Example 1
let head = new Node(5);
head.next = new Node(10);
head.next.next = new Node(19);
head.next.next.next = new Node(28);

head.bottom = new Node(7);
head.next.bottom = new Node(20);
head.next.next.bottom = new Node(22);
head.next.next.next.bottom = new Node(35);

head.bottom.bottom = new Node(8);
head.next.bottom.bottom = new Node(50);
head.next.next.bottom.bottom = new Node(40);

head.bottom.bottom.bottom = new Node(30);
head.next.next.bottom.bottom.bottom = new Node(45);

let resultThree = flattenLinkedList(head);
printLinkedList(resultThree); // Output: 5 -> 7 -> 8 -> 10 -> 19 -> 20 -> 22 -> 28 -> 30 -> 35 -> 40 -> 45 -> 50

// Helper function to print the linked list
function printLinkedList(head) {
  let values = [];
  while (head) {
    values.push(head.data);
    head = head.bottom;
  }
  console.log(values.join(" -> "));
}

// Q 4

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.random = null;
  }
}

function copyRandomList(head) {
  if (!head) {
    return null;
  }

  let map = new Map();

  // First pass: Create new nodes with the same values
  // and map the original nodes to their corresponding new nodes
  let curr = head;
  while (curr) {
    map.set(curr, new Node(curr.data));
    curr = curr.next;
  }

  // Second pass: Connect the next and random pointers
  curr = head;
  while (curr) {
    let newNode = map.get(curr);
    newNode.next = map.get(curr.next);
    newNode.random = map.get(curr.random);
    curr = curr.next;
  }

  // Return the head of the copied linked list
  return map.get(head);
}

// Example 1
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);

head.random = head.next;
head.next.random = head.next.next.next;

let res = copyRandomList(head);
printLinkedList(res); // Output: 1

// Helper function to print the linked list
function printLinkedList(head) {
  let values = [];
  let randomValues = [];
  while (head) {
    values.push(head.data);
    randomValues.push(head.random ? head.random.data : "null");
    head = head.next;
  }
  console.log("Next Pointers: " + values.join(" -> "));
  console.log("Random Pointers: " + randomValues.join(" -> "));
}

// Q 5

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function oddEvenList(head) {
  if (!head || !head.next) {
    return head;
  }

  let oddHead = head;
  let oddTail = head;
  let evenHead = head.next;
  let evenTail = head.next;

  let curr = evenHead ? evenHead.next : null;
  let isOdd = true;

  while (curr) {
    if (isOdd) {
      oddTail.next = curr;
      oddTail = curr;
    } else {
      evenTail.next = curr;
      evenTail = curr;
    }

    curr = curr.next;
    isOdd = !isOdd;
  }

  evenTail.next = null;
  oddTail.next = evenHead;

  return oddHead;
}

// Example 1
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

let outcome = oddEvenList(head);
printLinkedList(outcome); // Output: 1 -> 3 -> 5 -> 2 -> 4

// Helper function to print the linked list
function printLinkedList(head) {
  let values = [];
  while (head) {
    values.push(head.val);
    head = head.next;
  }
  console.log(values.join(" -> "));
}

// Q 6

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function leftShiftLinkedList(head, k) {
  if (!head || !head.next || k === 0) {
    return head;
  }

  // Get the length of the linked list
  let length = 0;
  let curr = head;
  while (curr) {
    length++;
    curr = curr.next;
  }

  // Adjust k to the actual number of shifts needed
  k = k % length;

  if (k === 0) {
    return head;
  }

  // Find the kth node from the beginning
  let slow = head;
  let fast = head;
  while (k > 0) {
    fast = fast.next;
    k--;
  }

  // Move both slow and fast pointers until fast reaches the last node
  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  // Adjust the pointers to perform the left shift
  let newHead = slow.next;
  slow.next = null;
  fast.next = head;

  return newHead;
}

// Example 1
let head = new ListNode(2);
head.next = new ListNode(4);
head.next.next = new ListNode(7);
head.next.next.next = new ListNode(8);
head.next.next.next.next = new ListNode(9);

let k = 3;

let output = leftShiftLinkedList(head, k);

printLinkedList(output); // Output: 8 -> 9 -> 2 -> 4 -> 7

// Helper function to print the linked list
function printLinkedList(head) {
  let values = [];
  while (head) {
    values.push(head.val);
    head = head.next;
  }
  console.log(values.join(" -> "));
}

// Q 7

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function nextLargerNodes(head) {
  let values = [];
  let stack = [];
  let result = [];

  // Traverse the linked list and store the node values in an array
  while (head) {
    values.push(head.val);
    head = head.next;
  }

  // Iterate over the array of node values in reverse order
  for (let i = values.length - 1; i >= 0; i--) {
    let currentValue = values[i];

    // Pop elements from the stack that are smaller than the current value
    while (stack.length > 0 && stack[stack.length - 1] <= currentValue) {
      stack.pop();
    }

    // If there are no greater elements in the stack, set the result as 0
    if (stack.length === 0) {
      result[i] = 0;
    } else {
      // Otherwise, set the result as the top element of the stack
      result[i] = stack[stack.length - 1];
    }

    // Push the current value to the stack
    stack.push(currentValue);
  }

  return result;
}

// Example 1
let head = new ListNode(2);
head.next = new ListNode(1);
head.next.next = new ListNode(5);

let result = nextLargerNodes(head);
console.log(result); // Output: [5, 5, 0]

// Q 8

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function removeZeroSumSublists(head) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let prefixSum = 0;
  let map = new Map();
  map.set(0, dummy);

  while (head) {
    prefixSum += head.val;

    if (map.has(prefixSum)) {
      let prev = map.get(prefixSum).next;
      let curr = prev.next;
      let sum = prefixSum + curr.val;

      while (sum !== prefixSum) {
        map.delete(sum);
        curr = curr.next;
        sum += curr.val;
      }

      map.get(prefixSum).next = curr.next;
    } else {
      map.set(prefixSum, head);
    }

    head = head.next;
  }

  return dummy.next;
}

// Example 1
let head1 = new ListNode(1);
head1.next = new ListNode(2);
head1.next.next = new ListNode(-3);
head1.next.next.next = new ListNode(3);
head1.next.next.next.next = new ListNode(1);

let result1 = removeZeroSumSublists(head1);
printLinkedList(result1); // Output: 3 -> 1

// Example 2
let head2 = new ListNode(1);
head2.next = new ListNode(2);
head2.next.next = new ListNode(3);
head2.next.next.next = new ListNode(-3);
head2.next.next.next.next = new ListNode(4);

let result2 = removeZeroSumSublists(head2);
printLinkedList(result2); // Output: 1 -> 2 -> 4

// Helper function to print the linked list
function printLinkedList(head) {
  let values = [];
  while (head) {
    values.push(head.val);
    head = head.next;
  }
  console.log(values.join(" -> "));
}
