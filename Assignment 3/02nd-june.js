// // Question 1

// function sumOfThreeClosest(nums, target) {
//   nums.sort((a, b) => a - b); // Sort the array in ascending order
//   let closestSum = nums[0] + nums[1] + nums[2];

//   for (let i = 0; i < nums.length - 2; i++) {
//     let left = i + 1;
//     let right = nums.length - 1;

//     while (left < right) {
//       const currentSum = nums[i] + nums[left] + nums[right];

//       if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
//         closestSum = currentSum;
//       }

//       if (currentSum === target) {
//         return currentSum; // Found an exact match, return the sum
//       } else if (currentSum < target) {
//         left++; // Move the left pointer to increase the sum
//       } else {
//         right--; // Move the right pointer to decrease the sum
//       }
//     }
//   }

//   return closestSum;
// }

// // Example usage:
// const nums = [-1, 2, 1, -4];
// const target = 1;
// const result = sumOfThreeClosest(nums, target);
// console.log(result); // Output: 2


// // Question 2

// function sumOfFour(nums, target) {
//     nums.sort((a, b) => a - b); // Sort the array in ascending order
//     const result = [];
  
//     for (let i = 0; i < nums.length - 3; i++) {
//       // Skip duplicate values for the first element
//       if (i > 0 && nums[i] === nums[i - 1]) {
//         continue;
//       }
  
//       for (let j = i + 1; j < nums.length - 2; j++) {
//         // Skip duplicate values for the second element
//         if (j > i + 1 && nums[j] === nums[j - 1]) {
//           continue;
//         }
  
//         let left = j + 1;
//         let right = nums.length - 1;
  
//         while (left < right) {
//           const sum = nums[i] + nums[j] + nums[left] + nums[right];
  
//           if (sum === target) {
//             result.push([nums[i], nums[j], nums[left], nums[right]]);
  
//             // Skip duplicate values for the third and fourth elements
//             while (left < right && nums[left] === nums[left + 1]) {
//               left++;
//             }
//             while (left < right && nums[right] === nums[right - 1]) {
//               right--;
//             }
  
//             left++;
//             right--;
//           } else if (sum < target) {
//             left++; // Move the left pointer to increase the sum
//           } else {
//             right--; // Move the right pointer to decrease the sum
//           }
//         }
//       }
//     }
  
//     return result;
//   }
  
//   // Example usage:
//   const nums = [1, 0, -1, 0, -2, 2];
//   const target = 0;
//   const result = sumOfFour(nums, target);
//   console.log(result);
//   // Output: [[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]
  

// //   Question - 3

// function permutation(nums) {
//     const n = nums.length;
//     let i = n - 2;
  
//     // Find the first pair of adjacent elements where nums[i] < nums[i+1]
//     while (i >= 0 && nums[i] >= nums[i + 1]) {
//       i--;
//     }
  
//     if (i >= 0) {
//       let j = n - 1;
  
//       // Find the smallest element to the right of nums[i] that is greater than nums[i]
//       while (j >= 0 && nums[j] <= nums[i]) {
//         j--;
//       }
  
//       swap(nums, i, j);
//     }
  
//     // Reverse the subarray to the right of nums[i]
//     reverse(nums, i + 1);
  
//     return nums;
//   }
  
//   // Helper function to swap two elements in the array
//   function swap(nums, i, j) {
//     const temp = nums[i];
//     nums[i] = nums[j];
//     nums[j] = temp;
//   }
  
//   // Helper function to reverse a subarray in place
//   function reverse(nums, start) {
//     let i = start;
//     let j = nums.length - 1;
  
//     while (i < j) {
//       swap(nums, i, j);
//       i++;
//       j--;
//     }
//   }
  
//   // Example usage:
//   const nums = [1, 2, 3];
//   const result = permutation(nums);
//   console.log(result); // Output: [1, 3, 2]
  

// //   Question - 4

// // The code uses a binary search algorithm to search for the target value in the sorted array nums. It initializes two pointers, left and right, which represent the range of indices to search within.

// // In each iteration of the while loop, the code calculates the middle index (mid) as the average of left and right. It then compares the value at nums[mid] with the target value.

// // If the value at nums[mid] is equal to the target, it means the target is found, and the function returns the mid index.

// // If the value at nums[mid] is less than the target, it means the target should be searched in the right half of the array. In this case, the left pointer is updated to mid + 1.

// // If the value at nums[mid] is greater than the target, it means the target should be searched in the left half of the array. In this case, the right pointer is updated to mid - 1.

// // The while loop continues until the left pointer exceeds the right pointer, indicating that the target is not found. In this case, the function returns the left pointer, which represents the index where the target would be inserted.

// // The binary search algorithm ensures a runtime complexity of O(log n) since the search space is halved in each iteration.

// function searchInsert(nums, target) {
//     let left = 0;
//     let right = nums.length - 1;
  
//     while (left <= right) {
//       const mid = Math.floor((left + right) / 2);
  
//       if (nums[mid] === target) {
//         return mid; // Target found, return the index
//       } else if (nums[mid] < target) {
//         left = mid + 1; // Target is greater, search in the right half
//       } else {
//         right = mid - 1; // Target is smaller, search in the left half
//       }
//     }
  
//     // Target not found, return the index where it would be inserted
//     return left;
//   }
  
//   // Example usage:
//   const nums = [1, 3, 5, 6];
//   const target = 5;
//   const result = searchInsert(nums, target);
//   console.log(result); // Output: 2

  
// //   Question - 5

// function incrementOne(digits) {
//     const n = digits.length;
  
//     // Start from the least significant digit
//     for (let i = n - 1; i >= 0; i--) {
//       // Increment the current digit by 1
//       digits[i]++;
  
//       // Check if there is a carry
//       if (digits[i] < 10) {
//         return digits; // No carry, return the incremented digits
//       }
  
//       // Carry occurred, set the current digit to 0 and continue to the next digit
//       digits[i] = 0;
//     }
  
//     // If all digits have a carry, add an additional digit 1 at the beginning
//     digits.unshift(1);
  
//     return digits;
//   }
  
//   // Example usage:
//   const digits = [1, 2, 3];
//   const result = incrementOne(digits);
//   console.log(result); // Output: [1, 2, 4]

// //   Question - 6

// function number(nums) {
//     let result = 0;
  
//     for (let i = 0; i < nums.length; i++) {
//       result ^= nums[i];
//     }
  
//     return result;
//   }
  
//   // Example usage:
//   const nums = [2, 2, 1];
//   const result = number(nums);
//   console.log(result); // Output: 1
  
// //   Question - 7

// function findMissingRanges(nums, lower, upper) {
//     const ranges = [];
  
//     // Helper function to add a range to the result
//     const addRange = (start, end) => {
//       if (start === end) {
//         ranges.push(`${start}`);
//       } else {
//         ranges.push(`${start}->${end}`);
//       }
//     };
  
//     // Handle the case where the lower bound is less than the first element
//     if (lower < nums[0]) {
//       addRange(lower, nums[0] - 1);
//     }
  
//     // Iterate through the array and find the missing ranges
//     for (let i = 1; i < nums.length; i++) {
//       if (nums[i] - nums[i - 1] > 1) {
//         addRange(nums[i - 1] + 1, nums[i] - 1);
//       }
//     }
  
//     // Handle the case where the upper bound is greater than the last element
//     if (upper > nums[nums.length - 1]) {
//       addRange(nums[nums.length - 1] + 1, upper);
//     }
  
//     return ranges;
//   }
  
//   // Example usage:
//   const nums = [0, 1, 3, 50, 75];
//   const lower = 0;
//   const upper = 99;
//   const result = findMissingRanges(nums, lower, upper);
//   console.log(result); // Output: ["2", "4->49", "51->74", "76->99"]

  
// //   Question - 8

// function attendMeeting(intervals) {
//     // Sort the intervals based on the start time
//     intervals.sort((a, b) => a[0] - b[0]);
  
//     // Check for overlapping intervals
//     for (let i = 1; i < intervals.length; i++) {
//       if (intervals[i][0] < intervals[i - 1][1]) {
//         return false; // Overlapping intervals found
//       }
//     }
  
//     // return true; // No overlapping intervals found
//   // }
  
//   // Example usage:
//   // const intervals = [[0, 30], [5, 10], [15, 20]];
//   // const result = attendMeeting(intervals);
//   // console.log(result); 
//   // Output: false
  