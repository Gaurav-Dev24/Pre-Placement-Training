// Q 1

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  function deleteMiddle(head) {
    if (head === null || head.next === null) {
      return null;
    }
  
    let slow = head;
    let fast = head;
    let prev = null;
  
    while (fast !== null && fast.next !== null) {
      fast = fast.next.next;
      prev = slow;
      slow = slow.next;
    }
  
    // Deleting the middle node(s)
    prev.next = slow.next;
  
    return head;
  }
  
  // Example usage
  // Create the linked list: 1->2->3->4->5
  let head = new Node(1);
  head.next = new Node(2);
  head.next.next = new Node(3);
  head.next.next.next = new Node(4);
  head.next.next.next.next = new Node(5);
  
  // Delete the middle node(s)
  head = deleteMiddle(head);
  
  // Print the modified linked list
  let current = head;
  while (current !== null) {
    console.log(current.data);
    current = current.next;
  }
  
// Q 2

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  function detectLoop(head) {
    let slow = head;
    let fast = head;
  
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
  
      if (slow === fast) {
        return true;
      }
    }
  
    return false;
  }
  
  // Example usage
  // Create the linked list: 1->3->4->2(loop)
  let head = new Node(1);
  let node2 = new Node(3);
  let node3 = new Node(4);
  let node4 = new Node(2);
  
  head.next = node2;
  node2.next = node3;
  node3.next = node4;
  node4.next = node2; // Creating a loop by connecting the tail to the second node
  
  // Check if the linked list contains a loop
  const hasLoop = detectLoop(head);
  
  console.log(hasLoop); // Output: true
  
// Q 3

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  function findNthFromEnd(head, N) {
    if (head === null || N <= 0) {
      return null;
    }
  
    let slow = head;
    let fast = head;
  
    // Move the fast pointer N nodes ahead
    for (let i = 0; i < N; i++) {
      if (fast === null) {
        return null; // N is greater than the number of nodes in the linked list
      }
      fast = fast.next;
    }
  
    // Iterate until the fast pointer reaches the end
    while (fast !== null) {
      slow = slow.next;
      fast = fast.next;
    }
  
    return slow.data; // Return the data value of the Nth node from the end
  }
  
  // Example usage
  // Create the linked list: 1->2->3->4->5->6->7->8->9
  let head = new Node(1);
  head.next = new Node(2);
  head.next.next = new Node(3);
  head.next.next.next = new Node(4);
  head.next.next.next.next = new Node(5);
  head.next.next.next.next.next = new Node(6);
  head.next.next.next.next.next.next = new Node(7);
  head.next.next.next.next.next.next.next = new Node(8);
  head.next.next.next.next.next.next.next.next = new Node(9);
  
  const N = 2;
  const result = findNthFromEnd(head, N);
  
  console.log(result); // Output: 8
  
// Q 4

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  function reverseList(head) {
    let prev = null;
    let current = head;
  
    while (current !== null) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
  
    return prev;
  }
  
  function isPalindrome(head) {
    if (head === null || head.next === null) {
      return true;
    }
  
    let slow = head;
    let fast = head;
  
    // Find the middle node
    while (fast.next !== null && fast.next.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }
  
    // Reverse the second half of the list
    let secondHalf = reverseList(slow.next);
    let firstHalf = head;
  
    // Compare the reversed second half with the first half
    while (secondHalf !== null) {
      if (firstHalf.data !== secondHalf.data) {
        return false;
      }
      firstHalf = firstHalf.next;
      secondHalf = secondHalf.next;
    }
  
    return true;
  }
  
  // Example usage
  // Create the linked list: R->A->D->A->R
  let head = new Node('R');
  head.next = new Node('A');
  head.next.next = new Node('D');
  head.next.next.next = new Node('A');
  head.next.next.next.next = new Node('R');
  
  const isPal = isPalindrome(head);
  
  console.log(isPal); // Output: true
  
// Q 5


class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  function detectLoop(head) {
    let slow = head;
    let fast = head;
  
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
  
      if (slow === fast) {
        return slow; // Return the meeting point
      }
    }
  
    return null; // No loop found
  }
  
  function removeLoop(head) {
    const loopNode = detectLoop(head);
  
    if (loopNode === null) {
      return head; // No loop found, return the original list
    }
  
    let ptr1 = head;
    let ptr2 = loopNode;
  
    // Move ptr2 to the next node until it becomes the head of the loop
    while (ptr1.next !== ptr2.next) {
      ptr1 = ptr1.next;
      ptr2 = ptr2.next;
    }
  
    // Break the loop by setting the next pointer of the previous node to null
    ptr2.next = null;
  
    return head; // Return the updated list with the loop removed
  }
  
  // Example usage
  // Create the linked list: 1->3->4->2(loop)
  let head = new Node(1);
  let node2 = new Node(3);
  let node3 = new Node(4);
  let node4 = new Node(2);
  
  head.next = node2;
  node2.next = node3;
  node3.next = node4;
  node4.next = node2; // Creating a loop by connecting the tail to the second node
  
  // Remove the loop
  head = removeLoop(head);
  
  // Print the modified linked list
  let current = head;
  while (current !== null) {
    console.log(current.data);
    current = current.next;
  }
  
// Q 6

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  function retainAndDelete(head, M, N) {
    let current = head;
    let previous = null;
  
    while (current !== null) {
      // Traverse M nodes
      for (let i = 1; i < M && current !== null; i++) {
        current = current.next;
      }
  
      if (current === null) {
        break; // Less than M nodes remaining
      }
  
      // Traverse N nodes to delete
      for (let i = 0; i < N && current !== null; i++) {
        let nextNode = current.next;
        current.next = null;
        current = nextNode;
      }
  
      // Connect previous node to the next node after skipping N nodes
      if (previous !== null) {
        previous.next = current;
      } else {
        head = current;
      }
  
      // Move previous pointer to current node
      previous = current;
    }
  
    return head;
  }
  
  // Example usage
  // Create the linked list: 1->2->3->4->5->6->7->8->9->10
  let head = new Node(1);
  let node2 = new Node(2);
  let node3 = new Node(3);
  let node4 = new Node(4);
  let node5 = new Node(5);
  let node6 = new Node(6);
  let node7 = new Node(7);
  let node8 = new Node(8);
  let node9 = new Node(9);
  let node10 = new Node(10);
  
  head.next = node2;
  node2.next = node3;
  node3.next = node4;
  node4.next = node5;
  node5.next = node6;
  node6.next = node7;
  node7.next = node8;
  node8.next = node9;
  node9.next = node10;
  
  const M = 3;
  const N = 2;
  
  head = retainAndDelete(head, M, N);
  
  // Print the modified linked list
  let current = head;
  while (current !== null) {
    console.log(current.data);
    current = current.next;
  }
  
// Q 7

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  function insertAtAlternatePositions(firstHead, secondHead) {
    if (!secondHead) {
      return firstHead;
    }
  
    let firstCurrent = firstHead;
    let secondCurrent = secondHead;
  
    while (firstCurrent && secondCurrent) {
      let firstNext = firstCurrent.next;
      let secondNext = secondCurrent.next;
  
      // Insert the secondCurrent node between firstCurrent and firstNext
      firstCurrent.next = secondCurrent;
      secondCurrent.next = firstNext;
  
      // Move firstCurrent and secondCurrent to their next nodes
      firstCurrent = firstNext;
      secondCurrent = secondNext;
    }
  
    if (secondCurrent) {
      // Append remaining nodes of second list at the end of first list
      let firstTail = firstHead;
      while (firstTail.next) {
        firstTail = firstTail.next;
      }
      firstTail.next = secondCurrent;
    }
  
    // Empty the second list
    secondHead = null;
  
    return firstHead;
  }
  
  // Example usage
  // Create the first linked list: 5->7->17->13->11
  let firstHead = new Node(5);
  let firstNode2 = new Node(7);
  let firstNode3 = new Node(17);
  let firstNode4 = new Node(13);
  let firstNode5 = new Node(11);
  
  firstHead.next = firstNode2;
  firstNode2.next = firstNode3;
  firstNode3.next = firstNode4;
  firstNode4.next = firstNode5;
  
  // Create the second linked list: 12->10->2->4->6
  let secondHead = new Node(12);
  let secondNode2 = new Node(10);
  let secondNode3 = new Node(2);
  let secondNode4 = new Node(4);
  let secondNode5 = new Node(6);
  
  secondHead.next = secondNode2;
  secondNode2.next = secondNode3;
  secondNode3.next = secondNode4;
  secondNode4.next = secondNode5;
  
  firstHead = insertAtAlternatePositions(firstHead, secondHead);
  
  // Print the modified first list
  let current = firstHead;
  while (current !== null) {
    console.log(current.data);
    current = current.next;
  }
  
  // Print the modified second list (should be empty)
  current = secondHead;
  while (current !== null) {
    console.log(current.data);
    current = current.next
  

// Q 8

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  function isCircular(head) {
    if (!head || !head.next) {
      return false; // Empty or single-node list
    }
  
    let fast = head;
    let slow = head;
  
    while (fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next;
  
      if (fast === slow) {
        return true; // Circular linked list
      }
    }
  
    return false; // Not circular
  }
  
  // Example usage
  // Create a circular linked list: 1->2->3->4->5->2 (2 points to the node with data 2)
  let head = new Node(1);
  let node2 = new Node(2);
  let node3 = new Node(3);
  let node4 = new Node(4);
  let node5 = new Node(5);
  
  head.next = node2;
  node2.next = node3;
  node3.next = node4;
  node4.next = node5;
  node5.next = node2; // Pointing back to the node with data 2, creating the cycle
  
  const isCircularList = isCircular(head);
  console.log(isCircularList); // Output: true
  
