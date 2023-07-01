// Q 1

function romanToInt(s) {
    const romanValues = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
    };
  
    let result = 0;
    let prevValue = 0;
  
    for (let i = s.length - 1; i >= 0; i--) {
      const currValue = romanValues[s[i]];
  
      // If the current value is less than the previous value,
      // subtract it from the result; otherwise, add it to the result
      if (currValue < prevValue) {
        result -= currValue;
      } else {
        result += currValue;
        prevValue = currValue;
      }
    }
  
    return result;
  }
  
  // Test the code with the given examples
  console.log(romanToInt("III")); // Output: 3
  console.log(romanToInt("LVIII")); // Output: 58

// Q 2

function lengthOfLongestSubstring(s) {
    const n = s.length;
    let maxLength = 0;
    let left = 0;
    let right = 0;
    const windowSet = new Set();
  
    while (right < n) {
      if (!windowSet.has(s[right])) {
        // Expand the window
        windowSet.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
        right++;
      } else {
        // Shrink the window
        windowSet.delete(s[left]);
        left++;
      }
    }
  
    return maxLength;
  }
  
  // Test the code with the given examples
  console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
  console.log(lengthOfLongestSubstring("bbbbb")); // Output: 1

// Q 3

function majorityElement(nums) {
    let count = 0;
    let candidate = null;
  
    for (let num of nums) {
      if (count === 0) {
        // If count is 0, we set the current element as the candidate
        candidate = num;
      }
  
      // Increment or decrement the count based on whether the current element matches the candidate
      count += (num === candidate) ? 1 : -1;
    }
  
    return candidate;
  }
  
  // Test the code with the given examples
  console.log(majorityElement([3, 2, 3])); // Output: 3
  console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2

// Q 4

function groupAnagrams(strs) {
    const map = new Map();
  
    for (let str of strs) {
      // Sort the current word to create a key
      const key = str.split('').sort().join('');
  
      // If the key is not in the map, initialize it with an empty array
      if (!map.has(key)) {
        map.set(key, []);
      }
  
      // Add the current word to the list of anagrams with the same key
      map.get(key).push(str);
    }
  
    // Return the values of the map (an array of arrays)
    return Array.from(map.values());
  }
  
  // Test the code with the given examples
  console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
  // Output: [["eat","tea","ate"],["tan","nat"],["bat"]]
  
  console.log(groupAnagrams([""]));
  // Output: [[""]]

// Q 5

function nthUglyNumber(n) {
    const ugly = [1];
    let p2 = 0, p3 = 0, p5 = 0;
  
    for (let i = 1; i < n; i++) {
      const nextUgly = Math.min(ugly[p2] * 2, ugly[p3] * 3, ugly[p5] * 5);
      ugly.push(nextUgly);
  
      if (nextUgly === ugly[p2] * 2) p2++;
      if (nextUgly === ugly[p3] * 3) p3++;
      if (nextUgly === ugly[p5] * 5) p5++;
    }
  
    return ugly[n - 1];
  }
  
  // Test the code with the given example
  console.log(nthUglyNumber(10));
  // Output: 12

// Q 6

function topKFrequent(words, k) {
    // Create a frequency map
    const frequencyMap = new Map();
    for (const word of words) {
      frequencyMap.set(word, (frequencyMap.get(word) || 0) + 1);
    }
  
    // Sort the words based on frequencies and lexicographical order
    const sortedWords = words.sort((a, b) => {
      const freqA = frequencyMap.get(a);
      const freqB = frequencyMap.get(b);
  
      if (freqA === freqB) {
        return a.localeCompare(b);
      } else {
        return freqB - freqA;
      }
    });
  
    // Return the k most frequent words
    return sortedWords.slice(0, k);
  }
  
  // Test the code with the given example
  console.log(topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 2));
  // Output: ["i", "love"]

// Q 7

from collections import deque

def maxSlidingWindow(nums, k):
    # Create a deque to store the indices of the elements
    window = deque()
    result = []
    
    # Iterate through the array
    for i in range(len(nums)):
        # Remove elements from the deque that are out of the current window
        while window and window[0] <= i - k:
            window.popleft()
        
        # Remove elements from the deque that are smaller than the current element
        while window and nums[window[-1]] < nums[i]:
            window.pop()
        
        # Add the current index to the deque
        window.append(i)
        
        # Add the maximum element of the current window to the result
        if i >= k - 1:
            result.append(nums[window[0]])
    
    return result

# Test the code with the given example
print(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))
# Output: [3, 3, 5, 5, 6, 7]

// Q 8

def findClosestElements(arr, k, x):
    # Initialize two pointers at the ends of the array
    left = 0
    right = len(arr) - 1

    # Move the pointers inward until the window size is reduced to k
    while right - left + 1 > k:
        if abs(arr[left] - x) > abs(arr[right] - x):
            left += 1
        else:
            right -= 1

    # Return the k closest elements from the window
    return arr[left:right + 1]

# Test the code with the given example
print(findClosestElements([1, 2, 3, 4, 5], 4, 3))
# Output: [1, 2, 3, 4]
