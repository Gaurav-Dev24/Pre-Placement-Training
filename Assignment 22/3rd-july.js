// Q 1

class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  let prev = null; // Global variable to track previous node
  
  function convertToDLL(root) {
    if (root === null) {
      return null;
    }
  
    // Convert left subtree
    const left = convertToDLL(root.left);
  
    // Set current node's left pointer as the previously visited node
    root.left = prev;
  
    // Set previous node's right pointer as the current node
    if (prev !== null) {
      prev.right = root;
    }
  
    // Update previous node to the current node
    prev = root;
  
    // Convert right subtree
    const right = convertToDLL(root.right);
  
    // Return the head of the DLL
    if (left === null) {
      return root;
    } else {
      return left;
    }
  }
  
  // Test the code with an example binary tree
  const root = new Node(10);
  root.left = new Node(5);
  root.right = new Node(20);
  root.right.left = new Node(15);
  root.right.right = new Node(30);
  
  const head = convertToDLL(root);
  
  // Print the converted DLL
  console.log("Output:");
  let currentNode = head;
  while (currentNode !== null) {
    console.log(currentNode.value);
    currentNode = currentNode.right;
  }

//   Output:
//   5
//   10
//   15
//   20
//   30
  
// Q 2

class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function flipBinaryTree(root) {
    if (root === null) {
      return null;
    }
  
    // Base case: if the current node is a leaf node, return the node itself
    if (root.left === null && root.right === null) {
      return root;
    }
  
    // Recursively flip the left and right subtrees
    const flippedLeft = flipBinaryTree(root.left);
    const flippedRight = flipBinaryTree(root.right);
  
    // Swap the left and right child pointers
    root.left = flippedRight;
    root.right = flippedLeft;
  
    return root;
  }
  
  // Test the code with an example binary tree
  const root = new Node(1);
  root.left = new Node(2);
  root.right = new Node(3);
  root.left.left = new Node(4);
  root.left.right = new Node(5);
  root.right.left = new Node(6);
  root.right.right = new Node(7);
  
  const flippedRoot = flipBinaryTree(root);
  
  // Print the flipped binary tree
  console.log("Output:");
  function printTree(root) {
    if (root === null) {
      return;
    }
  
    console.log(root.value);
    printTree(root.right);
    printTree(root.left);
  }
  printTree(flippedRoot);

//   Output:
// 1
// 3
// 7
// 6
// 2
// 5
// 4

// Q 3

class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function printRootToLeafPaths(root) {
    if (root === null) {
      return;
    }
  
    const stack = [];
    stack.push({ node: root, path: root.value.toString() });
  
    while (stack.length > 0) {
      const { node, path } = stack.pop();
  
      if (node.left === null && node.right === null) {
        // Leaf node reached, print the path
        console.log(path);
      }
  
      if (node.right !== null) {
        stack.push({ node: node.right, path: path + "->" + node.right.value });
      }
  
      if (node.left !== null) {
        stack.push({ node: node.left, path: path + "->" + node.left.value });
      }
    }
  }
  
  // Test the code with the given example
  const root = new Node(6);
  root.left = new Node(3);
  root.right = new Node(5);
  root.left.left = new Node(2);
  root.left.right = new Node(5);
  root.right.right = new Node(4);
  root.left.right.left = new Node(7);
  root.left.right.right = new Node(4);
  
  console.log("Output:");
  printRootToLeafPaths(root);

//   Output:
// 6->5->4
// 6->5->7
// 6->3->5->4
// 6->3->2

// Q 4

function areTraversalsSame(inorder, preorder, postorder) {
    // Base case: if any of the traversal arrays is empty, return true
    if (inorder.length === 0 || preorder.length === 0 || postorder.length === 0) {
      return true;
    }
  
    // Check if the root value from preorder matches the last value from postorder
    if (preorder[0] !== postorder[postorder.length - 1]) {
      return false;
    }
  
    // Find the index of the root value in inorder traversal
    const rootIndex = inorder.indexOf(preorder[0]);
  
    // Split the inorder traversal into left and right subtrees
    const leftInorder = inorder.slice(0, rootIndex);
    const rightInorder = inorder.slice(rootIndex + 1);
  
    // Split the preorder traversal into left and right subtrees
    const leftPreorder = preorder.slice(1, 1 + leftInorder.length);
    const rightPreorder = preorder.slice(1 + leftInorder.length);
  
    // Split the postorder traversal into left and right subtrees
    const leftPostorder = postorder.slice(0, leftInorder.length);
    const rightPostorder = postorder.slice(leftInorder.length, postorder.length - 1);
  
    // Recursively check if the left and right subtrees are the same
    const leftSame = areTraversalsSame(leftInorder, leftPreorder, leftPostorder);
    const rightSame = areTraversalsSame(rightInorder, rightPreorder, rightPostorder);
  
    // Return true if both left and right subtrees are the same, otherwise false
    return leftSame && rightSame;
  }
  
  // Test the code with the given examples
  const inorder1 = [4, 2, 5, 1, 3];
  const preorder1 = [1, 2, 4, 5, 3];
  const postorder1 = [4, 5, 2, 3, 1];
  console.log("Output 1:", areTraversalsSame(inorder1, preorder1, postorder1));
  
  const inorder2 = [4, 2, 5, 1, 3];
  const preorder2 = [1, 5, 4, 2, 3];
  const postorder2 = [4, 1, 2, 3, 5];
  console.log("Output 2:", areTraversalsSame(inorder2, preorder2, postorder2));

//   Output 1: Yes
// Output 2: No
