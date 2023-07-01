// Q 1

class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function binaryTreeToBST(root) {
    const values = [];
  
    // Perform in-order traversal and store the values
    function inorderTraversal(node) {
      if (node === null) {
        return;
      }
      inorderTraversal(node.left);
      values.push(node.value);
      inorderTraversal(node.right);
    }
  
    // Sort the values
    inorderTraversal(root);
    values.sort((a, b) => a - b);
  
    // Assign the sorted values back to the tree
    let index = 0;
    function assignValues(node) {
      if (node === null) {
        return;
      }
      assignValues(node.left);
      node.value = values[index];
      index++;
      assignValues(node.right);
    }
  
    // Assign the sorted values back to the tree
    assignValues(root);
  
    return root;
  }
  
  // Test the code with the given example
  const root = new TreeNode(10);
  root.left = new TreeNode(2);
  root.right = new TreeNode(7);
  root.left.left = new TreeNode(8);
  root.left.right = new TreeNode(4);
  
  const result = binaryTreeToBST(root);
  
  // Function to perform in-order traversal and print the tree
  function inorderTraversal(node) {
    if (node === null) {
      return;
    }
    inorderTraversal(node.left);
    console.log(node.value);
    inorderTraversal(node.right);
  }
  
  // Print the converted binary search tree
  console.log("Output:");
  inorderTraversal(result);

// Output:
// 2
// 4
// 7
// 8
// 10


// Q 2

class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function findDistance(root, node1, node2) {
    if (root === null) {
      return 0;
    }
  
    // If both nodes are less than current node, search in the left subtree
    if (node1 < root.value && node2 < root.value) {
      return findDistance(root.left, node1, node2);
    }
  
    // If both nodes are greater than current node, search in the right subtree
    if (node1 > root.value && node2 > root.value) {
      return findDistance(root.right, node1, node2);
    }
  
    // Lowest common ancestor found, calculate distances
    const distance1 = findNodeDistance(root, node1, 0);
    const distance2 = findNodeDistance(root, node2, 0);
  
    return distance1 + distance2;
  }
  
  function findNodeDistance(root, node, distance) {
    if (root === null) {
      return 0;
    }
  
    if (root.value === node) {
      return distance;
    }
  
    if (node < root.value) {
      return findNodeDistance(root.left, node, distance + 1);
    } else {
      return findNodeDistance(root.right, node, distance + 1);
    }
  }
  
  // Test the code with the given examples
  const root = new TreeNode(8);
  root.left = new TreeNode(3);
  root.left.left = new TreeNode(1);
  root.left.right = new TreeNode(6);
  root.left.right.left = new TreeNode(4);
  root.left.right.right = new TreeNode(7);
  root.right = new TreeNode(10);
  root.right.right = new TreeNode(14);
  root.right.right.left = new TreeNode(13);
  
  const node1 = 6;
  const node2 = 14;
  const distance1 = findDistance(root, node1, node2);
  console.log("Output1:");
  console.log("The distance between the two keys =", distance1);
  
  const node3 = 3;
  const node4 = 4;
  const distance2 = findDistance(root, node3, node4);
  console.log("Output2:");
  console.log("The distance between the two keys =", distance2);

//   Output1:
//   The distance between the two keys = 4
  
//   Output2:
//   The distance between the two keys = 2

// Q 3
  
class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class DoublyLinkedListNode {
    constructor(value) {
      this.value = value;
      this.prev = null;
      this.next = null;
    }
  }
  
  function convertToDoublyLinkedList(root) {
    if (root === null) {
      return null;
    }
  
    let head = null;
    let prev = null;
  
    function inorderTraversal(node) {
      if (node === null) {
        return;
      }
  
      inorderTraversal(node.left);
  
      // Convert the current node to a doubly linked list node
      const listNode = new DoublyLinkedListNode(node.value);
  
      if (prev === null) {
        // First node encountered, set it as the head
        head = listNode;
      } else {
        // Adjust the pointers between the previous and current nodes
        prev.next = listNode;
        listNode.prev = prev;
      }
  
      prev = listNode;
  
      inorderTraversal(node.right);
    }
  
    // Perform in-order traversal to convert the binary tree to doubly linked list
    inorderTraversal(root);
  
    return head;
  }
  
  // Test the code with the given example
  const root = new TreeNode(10);
  root.left = new TreeNode(5);
  root.right = new TreeNode(20);
  root.right.left = new TreeNode(30);
  root.right.right = new TreeNode(35);
  
  const doublyLinkedListHead = convertToDoublyLinkedList(root);
  
  // Print the doubly linked list
  console.log("Output:");
  let currentNode = doublyLinkedListHead;
  while (currentNode !== null) {
    console.log(currentNode.value);
    currentNode = currentNode.next;
  }

  
// Output:
// 5
// 10
// 30
// 20
// 35

// Q 4

class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
      this.next = null;
    }
  }
  
  function connectNodesAtSameLevel(root) {
    if (root === null) {
      return null;
    }
  
    let queue = [root];
  
    while (queue.length > 0) {
      let prevNode = null;
      let levelSize = queue.length;
  
      for (let i = 0; i < levelSize; i++) {
        let currentNode = queue.shift();
  
        if (prevNode !== null) {
          prevNode.next = currentNode;
        }
  
        prevNode = currentNode;
  
        if (currentNode.left !== null) {
          queue.push(currentNode.left);
        }
  
        if (currentNode.right !== null) {
          queue.push(currentNode.right);
        }
      }
  
      prevNode.next = null;
    }
  
    return root;
  }
  
  // Test the code with the given example
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  root.right.left = new TreeNode(6);
  root.right.right = new TreeNode(7);
  
  const result = connectNodesAtSameLevel(root);
  
  // Print the connected nodes
  console.log("Output:");
  let currentNode = result;
  while (currentNode !== null) {
    let nodeString = `${currentNode.value}`;
    if (currentNode.next !== null) {
      nodeString += ` → ${currentNode.next.value}`;
    } else {
      nodeString += ` → -1`;
    }
    console.log(nodeString);
    currentNode = currentNode.next;
  }


// Output:
// 1 → -1
// 2 → 3
// 3 → -1
// 4 → 5
// 5 → 6
// 6 → 7
// 7 → -1
