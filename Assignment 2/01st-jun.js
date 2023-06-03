// function sumOfThreeInteger(nums, target) {
//     nums.sort((a, b) => a - b); // Sort the array in ascending order
  
//     let closestSum = nums[0] + nums[1] + nums[2]; // Initialize closest sum to the first three elements
//     let minDiff = Math.abs(closestSum - target); // Initialize minimum difference to the difference between closest sum and target
  
//     for (let i = 0; i < nums.length - 2; i++) {
//       let left = i + 1; // Pointer to the element next to nums[i]
//       let right = nums.length - 1; // Pointer to the last element
  
//       while (left < right) {
//         const sum = nums[i] + nums[left] + nums[right];
//         const diff = Math.abs(sum - target);
  
//         if (diff < minDiff) {
//           minDiff = diff;
//           closestSum = sum;
//         }
  
//         if (sum < target) {
//           left++; // Move left pointer to increase the sum
//         } else {
//           right--; // Move right pointer to decrease the sum
//         }
//       }
//     }
  
//     return closestSum;
//   }
  
//   // Example usage:
//   const nums = [-1, 2, 1, -4];
//   const target = 1;
//   const closestSum = sumOfThreeInteger(nums, target);
//   console.log(closestSum); // Output: 2


//   //// Question--2////

//   function sumFourNumbers(nums, target) {
//     nums.sort((a, b) => a - b); // Sort the array in ascending order
//     const result = [];
  
//     for (let i = 0; i < nums.length - 3; i++) {
//       if (i > 0 && nums[i] === nums[i - 1]) {
//         continue; // Skip duplicate elements
//       }
  
//       for (let j = i + 1; j < nums.length - 2; j++) {
//         if (j > i + 1 && nums[j] === nums[j - 1]) {
//           continue; // Skip duplicate elements
//         }
  
//         let left = j + 1; // Pointer to the element next to nums[j]
//         let right = nums.length - 1; 
  
//         while (left < right) {
//           const sum = nums[i] + nums[j] + nums[left] + nums[right];
  
//           if (sum === target) {
//             result.push([nums[i], nums[j], nums[left], nums[right]]);
  
//             while (left < right && nums[left] === nums[left + 1]) {
//               left++; // Skip duplicate elements
//             }
//             while (left < right && nums[right] === nums[right - 1]) {
//               right--; // Skip duplicate elements
//             }
  
//             left++;
//             right--;
//           } else if (sum < target) {
//             left++; // Move left pointer to increase the sum
//           } else {
//             right--; // Move right pointer to decrease the sum
//           }
//         }
//       }
//     }
  
//     return result;
//   }
  
//   // Example usage:
//   const nums = [1, 0, -1, 0, -2, 2];
//   const target = 0;
//   const quadruplets = sumFourNumbers(nums, target);
//   console.log(quadruplets);
//   // Output: [[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]


//   //// Question--3////

//   function nextPermutation(nums) {
//     // Find the first pair of adjacent elements (i, i+1) where nums[i] < nums[i+1]
//     let i = nums.length - 2;
//     while (i >= 0 && nums[i] >= nums[i + 1]) {
//       i--;
//     }
  
//     if (i >= 0) {
//       // Find the smallest element in nums[i+1:] that is greater than nums[i]
//       let j = nums.length - 1;
//       while (j > i && nums[j] <= nums[i]) {
//         j--;
//       }
  
//       // Swap nums[i] and nums[j]
//       [nums[i], nums[j]] = [nums[j], nums[i]];
//     }
  
//     // Reverse the subarray nums[i+1:]
//     let left = i + 1;
//     let right = nums.length - 1;
//     while (left < right) {
//       [nums[left], nums[right]] = [nums[right], nums[left]];
//       left++;
//       right--;
//     }
//   }
  
//   // Example usage:
//   const nums = [1, 2, 3];
//   nextPermutation(nums);
//   console.log(nums); // Output: [1, 3, 2]


//   //// Question--4////

//   function targetValues(nums, target) {
//     let left = 0;
//     let right = nums.length - 1;
  
//     while (left <= right) {
//       const mid = Math.floor((left + right) / 2);
  
//       if (nums[mid] === target) {
//         return mid; // Found the target, return its index
//       } else if (nums[mid] < target) {
//         left = mid + 1; // Target is in the right half
//       } else {
//         right = mid - 1; // Target is in the left half
//       }
//     }
  
//     return left; // Target was not found, return the index where it would be inserted
//   }
  
//   // Example usage:
//   const nums = [1, 3, 5, 6];
//   const target = 5;
//   const index = targetValues(nums, target);
//   console.log(index); // Output: 2


//   //// Question--5////

//   function incrementNumber(digits) {
//     const n = digits.length;
    
//     for (let i = n - 1; i >= 0; i--) {
//       if (digits[i] < 9) {
//         digits[i]++;
//         return digits;
//       } else {
//         digits[i] = 0;
//       }
//     }
  
//     digits.unshift(1);
//     return digits;
//   }
  
//   // Example usage:
//   const digits = [1, 2, 3];
//   const result = incrementNumber(digits);
//   console.log(result); // Output: [1, 2, 4]


//   //// Question--6////

//   function singleElement(nums) {
//     let result = 0;
    
//     for (let num of nums) {
//       result ^= num;
//     }
    
//     return result;
//   }
  
//   // Example usage:
//   const nums = [2, 2, 1];
//   const single = singleElement(nums);
//   console.log(single); // Output: 1


//   //// Question--7////

//   function missingNumbers(nums, lower, upper) {
//     const missingRanges = [];
  
//     const addRange = (start, end) => {
//       if (start === end) {
//         missingRanges.push([start]);
//       } else {
//         missingRanges.push([start, end]);
//       }
//     };
  
//     // Check if the lower bound is missing
//     if (lower < nums[0]) {
//       addRange(lower, nums[0] - 1);
//     }
  
//     // Check for missing numbers between consecutive elements in nums
//     for (let i = 1; i < nums.length; i++) {
//       if (nums[i] - nums[i - 1] > 1) {
//         addRange(nums[i - 1] + 1, nums[i] - 1);
//       }
//     }
  
//     // Check if the upper bound is missing
//     if (upper > nums[nums.length - 1]) {
//       addRange(nums[nums.length - 1] + 1, upper);
//     }
  
//     return missingRanges;
//   }
  
//   // Example usage:
//   const nums = [0, 1, 3, 50, 75];
//   const lower = 0;
//   const upper = 99;
  
//   const result = missingNumbers(nums, lower, upper);
//   console.log(result);
//   //Output: [ [ 2 ], [ 4, 49 ], [ 51, 74 ], [ 76, 99 ] ]


//   //// Question--8////

//   function meetings(intervals) {
//     intervals.sort((a, b) => a[0] - b[0]); // Sort intervals by start time
  
//     for (let i = 1; i < intervals.length; i++) {
//       if (intervals[i][0] < intervals[i - 1][1]) {
//         return false; // Overlapping intervals found
//       }
//     }
  
//     return true; 
//   }
  
//   // Example usage:
//   const intervals = [[0, 30], [5, 10], [15, 20]];
//   const result = meetings(intervals);
//   console.log(result);
//   // Output: false

//   //////////////////////////////END///////////////////////////////