// Q 1

function mySqrt(x) {
    if (x === 0) {
      return 0;
    }
  
    let left = 1;
    let right = x;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const square = mid * mid;
  
      if (square === x) {
        return mid;
      } else if (square < x) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return right;
  }
  
  // Example usage:
  console.log(mySqrt(4)); // Output: 2
  console.log(mySqrt(8)); // Output: 2
  console.log(mySqrt(9)); // Output: 3
  console.log(mySqrt(16)); // Output: 4

// Q 2

function findPeakElement(nums) {
    let left = 0;
    let right = nums.length - 1;
  
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
  
      if (nums[mid] < nums[mid + 1]) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
  
    return left;
  }
  
  // Example usage:
  console.log(findPeakElement([1, 2, 3, 1])); // Output: 2
  console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4])); // Output: 5
  

// Q 3

function missingNumber(nums) {
    let missing = nums.length; // Initialize missing with the last number
  
    for (let i = 0; i < nums.length; i++) {
      missing ^= i ^ nums[i]; // XOR all numbers in range and array
    }
  
    return missing;
  }
  
  // Example usage:
  console.log(missingNumber([3, 0, 1])); // Output: 2
  console.log(missingNumber([0, 1])); // Output: 2
  console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // Output: 8
  

// Q 4

function findDuplicate(nums) {
    let slow = nums[0];
    let fast = nums[0];
  
    // Move slow and fast pointers until they meet
    do {
      slow = nums[slow];
      fast = nums[nums[fast]];
    } while (slow !== fast);
  
    // Move slow pointer back to the start and move both pointers at the same pace
    slow = nums[0];
    while (slow !== fast) {
      slow = nums[slow];
      fast = nums[fast];
    }
  
    return slow;
  }
  
  // Example usage:
  console.log(findDuplicate([1, 3, 4, 2, 2])); // Output: 2
  console.log(findDuplicate([3, 1, 3, 4, 2])); // Output: 3
  console.log(findDuplicate([1, 1])); // Output: 1
  

// Q 5

function intersection(nums1, nums2) {
    const set = new Set(nums1);
    const result = [];
  
    for (let num of nums2) {
      if (set.has(num)) {
        result.push(num);
        set.delete(num); // To ensure uniqueness in the result
      }
    }
  
    return result;
  }
  
  // Example usage:
  console.log(intersection([1, 2, 2, 1], [2, 2])); // Output: [2]
  console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4])); // Output: [4, 9]
  

// Q 6

function findMin(nums) {
    let left = 0;
    let right = nums.length - 1;
  
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
  
      if (nums[mid] > nums[right]) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
  
    return nums[left];
  }
  
  // Example usage:
  console.log(findMin([3, 4, 5, 1, 2])); // Output: 1
  console.log(findMin([4, 5, 6, 7, 0, 1, 2])); // Output: 0
  console.log(findMin([1])); // Output: 1
  

// Q 7

function searchRange(nums, target) {
    let start = findFirstOccurrence(nums, target);
    if (start === -1) {
      return [-1, -1];
    }
    
    let end = findLastOccurrence(nums, target);
    
    return [start, end];
  }
  
  function findFirstOccurrence(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let result = -1;
    
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      
      if (nums[mid] >= target) {
        right = mid - 1;
        if (nums[mid] === target) {
          result = mid;
        }
      } else {
        left = mid + 1;
      }
    }
    
    return result;
  }
  
  function findLastOccurrence(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let result = -1;
    
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      
      if (nums[mid] <= target) {
        left = mid + 1;
        if (nums[mid] === target) {
          result = mid;
        }
      } else {
        right = mid - 1;
      }
    }
    
    return result;
  }
  
  // Example usage:
  console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // Output: [3, 4]
  console.log(searchRange([5, 7, 7, 8, 8, 10], 6)); // Output: [-1, -1]
  

// Q 8

function intersect(nums1, nums2) {
    // Create a hash map to store the frequency of elements in nums1
    const frequencyMap = new Map();
    for (const num of nums1) {
      frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }
    
    // Iterate through nums2 to find the common elements
    const result = [];
    for (const num of nums2) {
      if (frequencyMap.has(num) && frequencyMap.get(num) > 0) {
        result.push(num);
        frequencyMap.set(num, frequencyMap.get(num) - 1);
      }
    }
    
    return result;
  }
  
  // Example usage:
  console.log(intersect([1, 2, 2, 1], [2, 2])); // Output: [2, 2]
  console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4])); // Output: [4, 9]
  