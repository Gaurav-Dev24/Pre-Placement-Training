// Q 1

function isPowerOfThree(n) {
    if (n <= 0) {
      return false;
    }
  
    while (n > 1) {
      if (n % 3 !== 0) {
        return false;
      }
      n /= 3;
    }
  
    return true;
  }
  
  // Example usage:
  console.log(isPowerOfThree(27)); // Output: true
  console.log(isPowerOfThree(45)); // Output: false
  

// Q 2

function lastRemaining(n) {
    let arr = Array.from({ length: n }, (_, i) => i + 1); // Generate array [1, 2, ..., n]
  
    let leftToRight = true; // Flag to indicate the current direction
  
    while (arr.length > 1) {
      if (leftToRight) {
        // Remove elements from left to right
        arr = arr.filter((_, index) => index % 2 !== 0);
      } else {
        // Remove elements from right to left
        arr = arr.filter((_, index) => (arr.length - index) % 2 !== 0);
      }
  
      leftToRight = !leftToRight; // Toggle the direction for the next iteration
    }
  
    return arr[0];
  }
  
  // Example usage:
  console.log(lastRemaining(9)); // Output: 6
  

// Q 3

function printSubsets(set, subset = "", index = 0) {
    const n = set.length;
  
    // Base case: If index reaches the length of the set, print the current subset
    if (index === n) {
      console.log(subset);
      return;
    }
  
    // Recursive case 1: Include the current character and move to the next index
    printSubsets(set, subset + set[index], index + 1);
  
    // Recursive case 2: Exclude the current character and move to the next index
    printSubsets(set, subset, index + 1);
  }
  
  // Example usage:
  printSubsets("abc");
  


// Q 4

function calculateStringLength(str) {
    // Base case: If the string is empty, return 0
    if (str === "") {
      return 0;
    }
  
    // Recursive case: Remove the first character and recursively calculate the length of the remaining string
    return 1 + calculateStringLength(str.slice(1));
  }
  
  // Example usage:
  console.log(calculateStringLength("abcd")); // Output: 4
  console.log(calculateStringLength("GEEKSFORGEEKS")); // Output: 13
  

// Q 5

function countContiguousSubstrings(S) {
    const n = S.length;
    let count = 0;
  
    for (let i = 0; i < n; i++) {
      count++; // Increment the count for the single-character substring S[i]
  
      let j = i - 1;
      let k = i + 1;
  
      // Expand the substring to both left and right until the characters are the same
      while (j >= 0 && k < n && S[j] === S[k]) {
        count++;
        j--;
        k++;
      }
    }
  
    return count;
  }
  
  // Example usage:
  console.log(countContiguousSubstrings("abcab")); // Output: 7
  console.log(countContiguousSubstrings("aba")); // Output: 4
  

// Q 6

function towerOfHanoi(n, source, destination, auxiliary) {
    if (n === 1) {
      // Base case: If there is only one disk, move it directly from the source to the destination
      console.log(`move disk 1 from rod ${source} to rod ${destination}`);
      return 1;
    } else {
      let count = 0;
  
      // Move n-1 disks from the source to the auxiliary rod
      count += towerOfHanoi(n - 1, source, auxiliary, destination);
  
      // Move the remaining disk from the source to the destination
      console.log(`move disk ${n} from rod ${source} to rod ${destination}`);
      count++;
  
      // Move the n-1 disks from the auxiliary rod to the destination
      count += towerOfHanoi(n - 1, auxiliary, destination, source);
  
      return count;
    }
  }
  
  // Example usage:
  const N = 2;
  const sourceRod = 1;
  const destinationRod = 3;
  const auxiliaryRod = 2;
  
  const totalMoves = towerOfHanoi(N, sourceRod, destinationRod, auxiliaryRod);
  console.log(totalMoves);
  

// Q 7

function swapChars(str, i, j) {
    const charArray = str.split("");
    const temp = charArray[i];
    charArray[i] = charArray[j];
    charArray[j] = temp;
    return charArray.join("");
  }
  
  function permute(str, l, r, result) {
    if (l === r) {
      // Base case: When we reach the end of the string (l == r), we have generated a permutation
      result.push(str);
    } else {
      for (let i = l; i <= r; i++) {
        str = swapChars(str, l, i); // Swap the characters at positions l and i
        permute(str, l + 1, r, result); // Recursively generate permutations for the remaining characters
        str = swapChars(str, l, i); // Restore the original string by swapping the characters back
      }
    }
  }
  
  function printPermutations(str) {
    const result = [];
    const n = str.length;
    permute(str, 0, n - 1, result);
    return result;
  }
  
  // Example usage:
  console.log(printPermutations("cd")); // Output: [ 'cd', 'dc' ]
  console.log(printPermutations("abb")); // Output: [ 'abb', 'bab', 'bba', 'abb', 'bab', 'bba' ]
  

// Q 8

function isConsonant(char) {
    const vowels = ["a", "e", "i", "o", "u"];
    return !vowels.includes(char.toLowerCase());
  }
  
  function countConsonants(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (isConsonant(str[i])) {
        count++;
      }
    }
    return count;
  }
  
  // Example usage:
  console.log(countConsonants("abc de")); // Output: 3
  console.log(countConsonants("geeksforgeeks portal")); // Output: 12
  