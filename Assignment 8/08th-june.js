// Q 1

function minimumDeleteSum(s1, s2) {
    const m = s1.length;
    const n = s2.length;
  
    // Initialize the table with 0s
    const dp = Array(m + 1)
      .fill(0)
      .map(() => Array(n + 1).fill(0));
  
    // Fill the table bottom-up
    for (let i = m - 1; i >= 0; i--) {
      dp[i][n] = dp[i + 1][n] + s1.charCodeAt(i);
    }
  
    for (let j = n - 1; j >= 0; j--) {
      dp[m][j] = dp[m][j + 1] + s2.charCodeAt(j);
    }
  
    for (let i = m - 1; i >= 0; i--) {
      for (let j = n - 1; j >= 0; j--) {
        if (s1.charAt(i) === s2.charAt(j)) {
          dp[i][j] = dp[i + 1][j + 1];
        } else {
          dp[i][j] = Math.min(
            dp[i + 1][j] + s1.charCodeAt(i),
            dp[i][j + 1] + s2.charCodeAt(j)
          );
        }
      }
    }
  
    return dp[0][0];
  }
  
  // Example usage:
  const s1 = "sea";
  const s2 = "eat";
  console.log(minimumDeleteSum(s1, s2)); // Output: 231
  

// Q 2

function checkValidString(s) {
    const stack = [];
    const starStack = [];
  
    for (let i = 0; i < s.length; i++) {
      const char = s.charAt(i);
  
      if (char === '(') {
        stack.push(i);
      } else if (char === ')') {
        if (stack.length > 0) {
          stack.pop();
        } else if (starStack.length > 0) {
          starStack.pop();
        } else {
          return false;
        }
      } else if (char === '*') {
        starStack.push(i);
      }
    }
  
    while (stack.length > 0 && starStack.length > 0) {
      const leftIndex = stack.pop();
      const starIndex = starStack.pop();
  
      if (leftIndex > starIndex) {
        return false;
      }
    }
  
    return stack.length === 0;
  }
  
  // Example usage:
  const str = "()";
  console.log(checkValidString(str)); // Output: true
  

// Q 3

function minDistance(word1, word2) {
    const m = word1.length;
    const n = word2.length;
  
    // Initialize the table with 0s
    const dp = Array(m + 1)
      .fill(0)
      .map(() => Array(n + 1).fill(0));
  
    // Fill the table bottom-up
    for (let i = 1; i <= m; i++) {
      dp[i][0] = i;
    }
  
    for (let j = 1; j <= n; j++) {
      dp[0][j] = j;
    }
  
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (word1.charAt(i - 1) === word2.charAt(j - 1)) {
          dp[i][j] = dp[i - 1][j - 1];
        } else {
          dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + 1;
        }
      }
    }
  
    return dp[m][n];
  }
  
  // Example usage:
  const word1 = "sea";
  const word2 = "eat";
  console.log(minDistance(word1, word2)); // Output: 2
  

// Q 4

class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function str2tree(s) {
    if (!s || s.length === 0) {
      return null;
    }
  
    const stack = [];
  
    for (let i = 0; i < s.length; i++) {
      let start = i;
  
      if (s[i] === '(') {
        stack.push(start);
      } else if (s[i] === ')') {
        const parent = stack.pop();
        const subtree = s.substring(parent + 1, i);
  
        if (stack.length === 0) {
          return str2tree(subtree);
        }
  
        const node = new TreeNode(parseInt(subtree));
        const top = stack[stack.length - 1];
  
        if (!stack[top].left) {
          stack[top].left = node;
        } else {
          stack[top].right = node;
        }
      } else {
        while (i + 1 < s.length && s[i + 1] !== '(' && s[i + 1] !== ')') {
          i++;
        }
  
        const node = new TreeNode(parseInt(s.substring(start, i + 1)));
        stack.push(node);
      }
    }
  
    return stack[0];
  }
  
  function inorderTraversal(root) {
    if (!root) {
      return [];
    }
  
    const result = [];
    const stack = [];
    let node = root;
  
    while (node || stack.length > 0) {
      while (node) {
        stack.push(node);
        node = node.left;
      }
  
      node = stack.pop();
      result.push(node.val);
      node = node.right;
    }
  
    return result;
  }
  
  // Example usage:
  const s = "4(2(3)(1))(6(5))";
  const root = str2tree(s);
  const result = inorderTraversal(root);
  console.log(result); // Output: [3, 2, 1, 4, 5, 6]
  

// Q 5

function compress(chars) {
    let write = 0;
    let count = 1;
  
    for (let read = 0; read < chars.length; read++) {
      if (read + 1 === chars.length || chars[read] !== chars[read + 1]) {
        chars[write] = chars[read];
        write++;
  
        if (count > 1) {
          const countStr = count.toString();
  
          for (let i = 0; i < countStr.length; i++) {
            chars[write] = countStr[i];
            write++;
          }
        }
  
        count = 1;
      } else {
        count++;
      }
    }
  
    return write;
  }
  
  // Example usage:
  const chars = ["a", "a", "b", "b", "c", "c", "c"];
  const newLength = compress(chars);
  const compressedChars = chars.slice(0, newLength);
  console.log(newLength); // Output: 6
  console.log(compressedChars); // Output: ["a", "2", "b", "2", "c", "3"]
  

// Q 6

function findAnagrams(s, p) {
    const result = [];
    const pFreq = {};
    let left = 0;
    let count = 0;
  
    for (const char of p) {
      pFreq[char] = (pFreq[char] || 0) + 1;
    }
  
    for (let right = 0; right < s.length; right++) {
      const rightChar = s[right];
  
      if (rightChar in pFreq) {
        pFreq[rightChar]--;
        if (pFreq[rightChar] === 0) {
          count++;
        }
      }
  
      while (count === Object.keys(pFreq).length) {
        if (right - left + 1 === p.length) {
          result.push(left);
        }
  
        const leftChar = s[left];
  
        if (leftChar in pFreq) {
          pFreq[leftChar]++;
          if (pFreq[leftChar] > 0) {
            count--;
          }
        }
  
        left++;
      }
    }
  
    return result;
  }
  
  // Example usage:
  const str1 = "cbaebabacd";
  const p = "abc";
  const indices = findAnagrams(str1, p);
  console.log(indices); // Output: [0, 6]
  

// Q 7

function decodeString(s) {
    const stack = [];
    
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      
      if (char === ']') {
        let str = '';
        
        while (stack.length > 0 && stack[stack.length - 1] !== '[') {
          str = stack.pop() + str;
        }
        
        stack.pop(); // Pop the opening bracket '['
        
        let repeat = '';
        
        while (stack.length > 0 && !isNaN(stack[stack.length - 1])) {
          repeat = stack.pop() + repeat;
        }
        
        repeat = parseInt(repeat);
        
        stack.push(str.repeat(repeat));
      } else {
        stack.push(char);
      }
    }
    
    return stack.join('');
  }
  
  // Example usage:
  const str2 = '3[a]2[bc]';
  const decodedString = decodeString(str2);
  console.log(decodedString); // Output: 'aaabcbc'
  

// Q 8

function buddyStrings(s, goal) {
    if (s.length !== goal.length) {
      return false;
    }
  
    if (s === goal) {
      // Check if s has at least one character that appears more than once
      const charCount = new Map();
      for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (charCount.has(char)) {
          return true;
        }
        charCount.set(char, true);
      }
      return false;
    }
  
    const mismatchedPairs = [];
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== goal[i]) {
        mismatchedPairs.push([s[i], goal[i]]);
      }
    }
  
    return mismatchedPairs.length === 2 &&
           mismatchedPairs[0][0] === mismatchedPairs[1][1] &&
           mismatchedPairs[0][1] === mismatchedPairs[1][0];
  }
  
  // Example usage:
  const str3 = "ab";
  const goal = "ba";
  const canSwap = buddyStrings(str3, goal);
  console.log(canSwap); // Output: true
  