//  SOLUTIONS OF THE ASSIGNMENT QUESTION WISE

// Question--1
function twoSum(nums, target) {
  const numIndices = new Map(); // Map to store num:index pairs

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = target - num;

    if (numIndices.has(complement)) {
      return [numIndices.get(complement), i];
    } else {
      numIndices.set(num, i);
    }
  }

  return []; // No solution found
}

// Example usage
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result); // Output: [0, 1]


// Question--2
function removeElement(nums, val) {
  let k = 0; // Counter for elements not equal to val

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
}

// Example usage
const nums = [3, 2, 2, 3];
const val = 3;
const result = removeElement(nums, val);
console.log(result); // Output: 2
console.log(nums); // Output: [2, 2, _, _]


// Question--3
function searchInsert(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
}

// Example usage
const nums = [1, 3, 5, 6];
const target = 5;
const result = searchInsert(nums, target);
console.log(result); // Output: 2


// Question--4
function plusOne(digits) {
  const n = digits.length;
  let carry = 1; // Initialize carry to 1 for incrementing

  for (let i = n - 1; i >= 0; i--) {
    const sum = digits[i] + carry;
    digits[i] = sum % 10; // Update the digit

    if (sum < 10) {
      // No carry, early return
      return digits;
    }

    carry = Math.floor(sum / 10); // Calculate the carry
  }

  // If the carry remains after the loop, add it as a new digit
  if (carry > 0) {
    digits.unshift(carry);
  }

  return digits;
}

// Example usage
const digits = [1, 2, 3];
const result = plusOne(digits);
console.log(result); // Output: [1, 2, 4]


// Question--5
function merge(nums1, m, nums2, n) {
  let i = m - 1; // Pointer for nums1
  let j = n - 1; // Pointer for nums2
  let k = m + n - 1; // Pointer for merged array

  while (i >= 0 && j >= 0) {
    if (nums1[i] <= nums2[j]) {
      nums1[k] = nums2[j];
      j--;
    } else {
      nums1[k] = nums1[i];
      i--;
    }
    k--;
  }

  // Copy remaining elements from nums2 to nums1 if any
  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }
}

// Example usage
const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;

merge(nums1, m, nums2, n);
console.log(nums1); // Output: [1, 2, 2, 3, 5, 6]


// Question--6
function containsDuplicate(nums) {
  const seen = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (seen.has(nums[i])) {
      return true;
    } else {
      seen.add(nums[i]);
    }
  }

  return false;
}

// Example usage
const nums = [1, 2, 3, 1];
const result = containsDuplicate(nums);
console.log(result); // Output: true


// Question--7
function moveZeroes(nums) {
  let j = 0; // Pointer for placing nonzero elements

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      // Swap nonzero element with the next available position
      [nums[j], nums[i]] = [nums[i], nums[j]];
      j++;
    }
  }

  // Fill the remaining positions with zeros
  for (let i = j; i < nums.length; i++) {
    nums[i] = 0;
  }
}

// Example usage
const nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums); // Output: [1, 3, 12, 0, 0]


// Question--8
function findErrorNums(nums) {
  const set = new Set();
  let duplicate;
  let missing;

  for (let num of nums) {
    if (set.has(num)) {
      duplicate = num;
    } else {
      set.add(num);
    }
  }

  for (let i = 1; i <= nums.length; i++) {
    if (!set.has(i)) {
      missing = i;
      break;
    }
  }

  return [duplicate, missing];
}

// Example usage
const nums = [1, 2, 2, 4];
const result = findErrorNums(nums);
console.log(result); // Output: [2, 3]
