// Q 1

function calculateDepth(preorder) {
    let depth = 0;
    const stack = [];
  
    for (let i = 0; i < preorder.length; i++) {
      if (preorder[i] === 'n') {
        // Internal node encountered, increment depth
        depth++;
        stack.push(depth);
      } else if (preorder[i] === 'l') {
        // Leaf node encountered, remove depth from stack
        depth = stack.pop();
      }
    }
  
    return depth;
  }
  
  // Test the code with the given example
  const preorder = 'nlnll';
  console.log("Output:", calculateDepth(preorder));

//   Output: 2

// Q 2

class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  function printLeftView(root) {
    if (root === null) {
      return;
    }
  
    const queue = [root];
    let levelSize = 1;
  
    while (queue.length > 0) {
      const node = queue.shift();
      levelSize--;
  
      // Print the leftmost node at each level
      if (levelSize === 0) {
        console.log(node.data);
      }
  
      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
  
      // Update the level size for the next level
      if (levelSize === 0) {
        levelSize = queue.length;
      }
    }
  }
  
  // Test the code with the given example
  const root = new Node(4);
  root.left = new Node(5);
  root.right = new Node(2);
  root.right.left = new Node(3);
  root.right.right = new Node(1);
  root.right.left.left = new Node(6);
  root.right.left.right = new Node(7);
  
  console.log("Left View:");
  printLeftView(root);

//   Left View:
// 4
// 5
// 3
// 6

// Q 3

class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  function printRightView(root) {
    if (root === null) {
      return;
    }
  
    const queue = [root];
    let levelSize = 1;
  
    while (queue.length > 0) {
      const node = queue.pop();
      levelSize--;
  
      // Print the rightmost node at each level
      if (levelSize === 0) {
        console.log(node.data);
      }
  
      if (node.left !== null) {
        queue.unshift(node.left);
      }
      if (node.right !== null) {
        queue.unshift(node.right);
      }
  
      // Update the level size for the next level
      if (levelSize === 0) {
        levelSize = queue.length;
      }
    }
  }
  
  // Test the code with the given example
  const root = new Node(1);
  root.left = new Node(2);
  root.right = new Node(3);
  root.left.left = new Node(4);
  root.left.right = new Node(5);
  root.right.left = new Node(6);
  root.right.right = new Node(7);
  root.right.right.right = new Node(8);
  
  console.log("Right View:");
  printRightView(root);

//   Right View:
// 1
// 3
// 7
// 8

// Q 4

class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
      this.hd = 0; // Horizontal distance from the root
    }
  }
  
  function printBottomView(root) {
    if (root === null) {
      return;
    }
  
    const queue = [root];
    const viewMap = new Map();
  
    while (queue.length > 0) {
      const node = queue.shift();
      const hd = node.hd;
  
      // Update the bottom view map with the current node value
      viewMap.set(hd, node.data);
  
      if (node.left !== null) {
        node.left.hd = hd - 1;
        queue.push(node.left);
      }
      if (node.right !== null) {
        node.right.hd = hd + 1;
        queue.push(node.right);
      }
    }
  
    // Print the bottom view from the view map
    for (const [hd, value] of viewMap) {
      console.log(value);
    }
  }
  
  // Test the code with the given example
  const root = new Node(20);
  root.left = new Node(8);
  root.right = new Node(22);
  root.left.left = new Node(5);
  root.left.right = new Node(3);
  root.right.right = new Node(25);
  root.left.right.left = new Node(10);
  root.left.right.right = new Node(14);
  
  console.log("Bottom View:");
  printBottomView(root);

//   Bottom View:
// 5
// 10
// 3
// 14
// 25
