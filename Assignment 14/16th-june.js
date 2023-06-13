// Q 1

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  function createNewListWithGreaterNodes(firstHead, secondHead) {
    if (!firstHead) {
      return secondHead;
    }
    if (!secondHead) {
      return firstHead;
    }
  
    let firstCurrent = firstHead;
    let secondCurrent = secondHead;
    let newHead = null;
    let newTail = null;
  
    while (firstCurrent && secondCurrent) {
      let newNode;
      if (firstCurrent.data >= secondCurrent.data) {
        newNode = new Node(firstCurrent.data);
        firstCurrent = firstCurrent.next;
      } else {
        newNode = new Node(secondCurrent.data);
        secondCurrent = secondCurrent.next;
      }
  
      if (!newHead) {
        newHead = newNode;
        newTail = newNode;
      } else {
        newTail.next = newNode;
        newTail = newNode;
      }
    }
  
    if (firstCurrent) {
      newTail.next = firstCurrent;
    } else if (secondCurrent) {
      newTail.next = secondCurrent;
    }
  
    return newHead;
  }
  
  // Example usage
  // Create the first linked list: 1->3->5->7
  let firstHead = new Node(1);
  let firstNode2 = new Node(3);
  let firstNode3 = new Node(5);
  let firstNode4 = new Node(7);
  
  firstHead.next = firstNode2;
  firstNode2.next = firstNode3;
  firstNode3.next = firstNode4;
  
  // Create the second linked list: 2->4->6->8
  let secondHead = new Node(2);
  let secondNode2 = new Node(4);
  let secondNode3 = new Node(6);
  let secondNode4 = new Node(8);
  
  secondHead.next = secondNode2;
  secondNode2.next = secondNode3;
  secondNode3.next = secondNode4;
  
  let newHead = createNewListWithGreaterNodes(firstHead, secondHead);
  
  // Print the new list
  let current = newHead;
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
  
  function removeDuplicates(head) {
    if (!head || !head.next) {
      return head; // Empty or single-node list
    }
  
    let current = head;
  
    while (current.next) {
      if (current.data === current.next.data) {
        current.next = current.next.next; // Skip the next node
      } else {
        current = current.next; // Move to the next node
      }
    }
  
    return head;
  }
  
  // Example usage
  // Create the linked list: 11->11->11->21->43->43->60
  let head = new Node(11);
  let node2 = new Node(11);
  let node3 = new Node(11);
  let node4 = new Node(21);
  let node5 = new Node(43);
  let node6 = new Node(43);
  let node7 = new Node(60);
  
  head.next = node2;
  node2.next = node3;
  node3.next = node4;
  node4.next = node5;
  node5.next = node6;
  node6.next = node7;
  
  head = removeDuplicates(head);
  
  // Print the modified list
  let current = head;
  while (current !== null) {
    console.log(current.data);
    current = current.next;
  }
  
// Q 3

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  function reverseKNodes(head, k) {
    if (!head || k <= 1) {
      return head; // No reversal required
    }
  
    let current = head;
    let prev = null;
    let next = null;
    let count = 0;
  
    // Count the number of nodes
    while (current && count < k) {
      current = current.next;
      count++;
    }
  
    // Reverse the first k nodes
    if (count === k) {
      current = head;
      count = 0;
  
      while (count < k && current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
        count++;
      }
  
      if (next) {
        head.next = reverseKNodes(next, k);
      }
    }
  
    return prev;
  }
  
  // Example usage
  // Create the linked list: 1->2->2->4->5->6->7->8
  let head = new Node(1);
  let node2 = new Node(2);
  let node3 = new Node(2);
  let node4 = new Node(4);
  let node5 = new Node(5);
  let node6 = new Node(6);
  let node7 = new Node(7);
  let node8 = new Node(8);
  
  head.next = node2;
  node2.next = node3;
  node3.next = node4;
  node4.next = node5;
  node5.next = node6;
  node6.next = node7;
  node7.next = node8;
  
  let k = 4;
  
  head = reverseKNodes(head, k);
  
  // Print the reversed list
  let current = head;
  while (current !== null) {
    console.log(current.data);
    current = current.next;
  }
  
// Q 4

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  function reverseAlternateKNodes(head, k) {
    if (!head || k <= 1) {
      return head; // No reversal required
    }
  
    let current = head;
    let prev = null;
    let next = null;
    let count = 0;
  
    // Reverse every alternate group of k nodes
    while (current) {
      count = 0;
      while (count < k && current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
        count++;
      }
  
      if (count % (2 * k) >= k) {
        // Reattach the reversed group to the main list
        let temp = prev;
        while (temp.next !== null) {
          temp = temp.next;
        }
        temp.next = current;
      } else {
        // Skip the nodes of the current group
        let temp = prev;
        while (temp !== null) {
          temp = temp.next;
        }
      }
      prev = null;
    }
  
    return head;
  }
  
  // Example usage
  // Create the linked list: 1->2->3->4->5->6->7->8->9->NULL
  let head = new Node(1);
  let node2 = new Node(2);
  let node3 = new Node(3);
  let node4 = new Node(4);
  let node5 = new Node(5);
  let node6 = new Node(6);
  let node7 = new Node(7);
  let node8 = new Node(8);
  let node9 = new Node(9);
  
  head.next = node2;
  node2.next = node3;
  node3.next = node4;
  node4.next = node5;
  node5.next = node6;
  node6.next = node7;
  node7.next = node8;
  node8.next = node9;
  
  let k = 3;
  
  head = reverseAlternateKNodes(head, k);
  
  // Print the modified list
  let current = head;
  while (current !== null) {
    console.log(current.data);
    current = current.next;
  }
  
// Q 5

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  function deleteLastOccurrence(head, key) {
    if (!head) {
      return null; // Empty list
    }
  
    let prev = null;
    let last = null;
    let current = head;
  
    // Traverse the linked list to find the last occurrence of the key
    while (current) {
      if (current.data === key) {
        last = current;
      }
      prev = current;
      current = current.next;
    }
  
    if (!last) {
      return head; // Key not found, return original list
    }
  
    if (last === head) {
      return head.next; // Key is the first node, update head
    }
  
    prev.next = last.next; // Skip the last occurrence of the key
  
    return head;
  }
  
  // Example usage
  // Create the linked list: 1->2->3->5->2->10
  let head = new Node(1);
  let node2 = new Node(2);
  let node3 = new Node(3);
  let node4 = new Node(5);
  let node5 = new Node(2);
  let node6 = new Node(10);
  
  head.next = node2;
  node2.next = node3;
  node3.next = node4;
  node4.next = node5;
  node5.next = node6;
  
  let key = 2;
  
  head = deleteLastOccurrence(head, key);
  
  // Print the modified list
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
  
  function mergeSortedLists(head1, head2) {
    // Create a dummy node as the head of the merged list
    let dummy = new Node(0);
    let result = dummy;
  
    let ptr1 = head1;
    let ptr2 = head2;
  
    // Compare and append nodes until either ptr1 or ptr2 becomes null
    while (ptr1 !== null && ptr2 !== null) {
      if (ptr1.data <= ptr2.data) {
        result.next = ptr1;
        ptr1 = ptr1.next;
      } else {
        result.next = ptr2;
        ptr2 = ptr2.next;
      }
      result = result.next;
    }
  
    // Append the remaining nodes of the non-null list
    if (ptr1 !== null) {
      result.next = ptr1;
    }
    if (ptr2 !== null) {
      result.next = ptr2;
    }
  
    return dummy.next; // Return the head of the merged list
  }
  
  // Example usage
  // Create the first sorted linked list: 5->10->15
  let head1 = new Node(5);
  let node2 = new Node(10);
  let node3 = new Node(15);
  head1.next = node2;
  node2.next = node3;
  
  // Create the second sorted linked list: 2->3->20
  let head2 = new Node(2);
  let node5 = new Node(3);
  let node6 = new Node(20);
  head2.next = node5;
  node5.next = node6;
  
  // Merge the two sorted lists
  let mergedHead = mergeSortedLists(head1, head2);
  
  // Print the merged list
  let current = mergedHead;
  while (current !== null) {
    console.log(current.data);
    current = current.next;
  }
  
// Q 7

class Node {
    constructor(data) {
      this.data = data;
      this.prev = null;
      this.next = null;
    }
  }
  
  function reverseDoublyLinkedList(head) {
    let current = head;
    let temp = null;
  
    // Swap prev and next pointers for each node
    while (current !== null) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      current = current.prev; // Move to the next node
    }
  
    // Set the head of the reversed list
    if (temp !== null) {
      head = temp.prev;
    }
  
    return head;
  }
  
  // Example usage
  // Create the doubly linked list: 10<->8<->4<->2
  let head = new Node(10);
  let node2 = new Node(8);
  let node3 = new Node(4);
  let node4 = new Node(2);
  head.next = node2;
  node2.prev = head;
  node2.next = node3;
  node3.prev = node2;
  node3.next = node4;
  node4.prev = node3;
  
  // Reverse the doubly linked list
  let reversedHead = reverseDoublyLinkedList(head);
  
  // Print the reversed list
  let current = reversedHead;
  while (current !== null) {
    console.log(current.data);
    current = current.next;
  }
  
// Q 8

class Node {
    constructor(data) {
      this.data = data;
      this.prev = null;
      this.next = null;
    }
  }
  
  function deleteNodeAtPosition(head, position) {
    if (head === null) {
      return head;
    }
  
    if (position === 1) {
      let newHead = head.next;
      if (newHead !== null) {
        newHead.prev = null;
      }
      return newHead;
    }
  
    let current = head;
    let count = 1;
  
    while (current !== null && count < position) {
      current = current.next;
      count++;
    }
  
    if (current === null) {
      return head;
    }
  
    current.prev.next = current.next;
  
    if (current.next !== null) {
      current.next.prev = current.prev;
    }
  
    return head;
  }
  
  // Example usage
  // Create the doubly linked list: 1<->3<->4
  let head = new Node(1);
  let node2 = new Node(3);
  let node3 = new Node(4);
  head.next = node2;
  node2.prev = head;
  node2.next = node3;
  node3.prev = node2;
  
  // Delete node at position 3
  let position = 3;
  head = deleteNodeAtPosition(head, position);
  
  // Print the updated list
  let current = head;
  while (current !== null) {
    console.log(current.data);
    current = current.next;
  }
  