//   Find unique number

function firstUniqChar(s) {
    const charCount = {};
  
    // Count the occurrences of each character
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      charCount[char] = (charCount[char] || 0) + 1;
    }
  
    // Find the index of the first non-repeating character
    for (let i = 0; i < s.length; i++) {
      if (charCount[s[i]] === 1) {
        return i;
      }
    }
  
    return -1; // Return -1 if no non-repeating character is found
  }
  
  // Example usage
  console.log(firstUniqChar("leetcode")); // Output: 0
  console.log(firstUniqChar("loveleetcode")); // Output: 2
  console.log(firstUniqChar("aabb")); // Output: -1
  