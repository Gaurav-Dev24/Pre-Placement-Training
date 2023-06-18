class ListNode {
    constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  const addTwoNumbers = (l1, l2) => {
    let dummyHead = new ListNode(0);
    let currentNode = dummyHead;
    let carry = 0;
    
    while (l1 !== null || l2 !== null || carry !== 0) {
      let sum = carry;
      
      if (l1 !== null) {
        sum += l1.val;
        l1 = l1.next;
      }
      
      if (l2 !== null) {
        sum += l2.val;
        l2 = l2.next;
      }
      
      carry = Math.floor(sum / 10);
      sum %= 10;
      
      currentNode.next = new ListNode(sum);
      currentNode = currentNode.next;
    }
    
    return dummyHead.next;
  };

  
// Example 1
let l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

let l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

let result = addTwoNumbers(l1, l2);
let output = '';
while (result !== null) {
  output += result.val + ' ';
  result = result.next;
}
console.log(output);  // Output: 7 0 8

// Example 2
l1 = new ListNode(0);
l2 = new ListNode(0);
result = addTwoNumbers(l1, l2);
output = '';
while (result !== null) {
  output += result.val + ' ';
  result = result.next;
}
console.log(output);  // Output: 0

// Example 3
l1 = new ListNode(9);
l1.next = new ListNode(9);
l1.next.next = new ListNode(9);
l1.next.next.next = new ListNode(9);
l1.next.next.next.next = new ListNode(9);
l1.next.next.next.next.next = new ListNode(9);
l1.next.next.next.next.next.next = new ListNode(9);

l2 = new ListNode(9);
l2.next = new ListNode(9);
l2.next.next = new ListNode(9);
l2.next.next.next = new ListNode(9);

result = addTwoNumbers(l1, l2);
output = '';
while (result !== null) {
  output += result.val + ' ';
  result = result.next;
}
console.log(output);  // Output: 8 9 9 9 0 0 0 1
