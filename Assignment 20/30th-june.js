// Q 1

// class Node {
//     constructor(value) {
//       this.value = value;
//       this.left = null;
//       this.right = null;
//     }
// }
  
// function findMaxSubtreeSum(root) {
//     let maxSum = -Infinity;
  
//     function findMaxSum(node) {
//       if (node === null) {
//         return 0;
//       }
  
//       // Recursively calculate the sum of left and right subtrees
//       const leftSum = findMaxSum(node.left);
//       const rightSum = findMaxSum(node.right);
  
//       // Calculate the sum of the current subtree
//       const currentSum = node.value + leftSum + rightSum;
  
//       // Update the maximum sum if the current sum is larger
//       maxSum = Math.max(maxSum, currentSum);
  
//       // Return the sum of the current subtree
//       return currentSum;
//     }
  
//     // Call the recursive function to find the maximum sum
//     findMaxSum(root);
  
//     return maxSum;
//   }
  
//   // Test the code with the given example
//   const root = new Node(1);
//   root.left = new Node(2);
//   root.right = new Node(3);
//   root.left.left = new Node(4);
//   root.left.right = new Node(5);
//   root.right.left = new Node(6);
//   root.right.right = new Node(7);
  
//   const maxSubtreeSum = findMaxSubtreeSum(root);
//   console.log("Maximum subtree sum:", maxSubtreeSum); // o/p- 28
  
// Q 2

// class Node {
//     constructor(value) {
//       this.value = value;
//       this.left = null;
//       this.right = null;
//     }
//   }
  
//   function constructBSTFromLevelOrder(arr) {
//     if (arr.length === 0) {
//       return null;
//     }
  
//     const root = new Node(arr[0]);
//     const queue = [root];
//     let i = 1;
  
//     while (i < arr.length) {
//       const current = queue.shift();
  
//       if (i < arr.length && arr[i] < current.value) {
//         current.left = new Node(arr[i]);
//         queue.push(current.left);
//         i++;
//       }
  
//       if (i < arr.length && arr[i] >= current.value) {
//         current.right = new Node(arr[i]);
//         queue.push(current.right);
//         i++;
//       }
//     }
  
//     return root;
//   }
  
//   // Test the code with the given example
//   const arr = [7, 4, 12, 3, 6, 8, 1, 5, 10];
//   const root = constructBSTFromLevelOrder(arr);
//   console.log("BST:");
//   console.log(root);

  
// Q 3

class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function isLevelOrderBST(arr) {
    if (arr.length === 0) {
      return true;
    }
  
    const stack = [];
    stack.push(new Node(Infinity));
    let i = 0;
  
    for (i = 0; i < arr.length; i++) {
      const currentNode = new Node(arr[i]);
  
      while (arr[i] > stack[stack.length - 1].value) {
        if (stack.length === 0) {
          return false;
        }
        const poppedNode = stack.pop();
        poppedNode.right = currentNode;
      }
  
      if (arr[i] < stack[stack.length - 1].value) {
        stack[stack.length - 1].left = currentNode;
      }
  
      stack.push(currentNode);
    }
  
    // Check if there are any remaining elements in the array
    if (i < arr.length) {
      return false;
    }
  
    return true;
  }
  
  // Test the code with the given examples
  const arr1 = [7, 4, 12, 3, 6, 8, 1, 5, 10];
  const result1 = isLevelOrderBST(arr1);
  console.log("Output1:", result1 ? "Yes" : "No"); // Yes
  
  const arr2 = [11, 6, 13, 5, 12, 10];
  const result2 = isLevelOrderBST(arr2);
  console.log("Output2:", result2 ? "Yes" : "No"); // No
  