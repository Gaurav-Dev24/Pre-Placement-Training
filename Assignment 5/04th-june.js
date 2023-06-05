// // Q 1

// // function convertTo2D(original, m, n) {
// //     if (m * n !== original.length) {
// //       return []; // Return empty 2D array if it's impossible to construct
// //     }
  
// //     const result = [];
// //     for (let i = 0; i < m; i++) {
// //       const row = original.slice(i * n, (i + 1) * n);
// //       result.push(row);
// //     }
  
// //     return result;
// //   }
  
// //   // Example usage:
// //   const original = [1, 2, 3, 4];
// //   const m = 2;
// //   const n = 2;
  
// //   console.log(convertTo2D(original, m, n));

// //   For the given example, it will output [[1, 2], [3, 4]].


// // Q 2

// function arrangeCoins(n) {
//     let completeRows = 0;
//     let coinsRequired = 1;
  
//     while (n >= coinsRequired) {
//       n -= coinsRequired;
//       coinsRequired++;
//       completeRows++;
//     }
  
//     return completeRows;
//   }
  
//   // Example usage:
//   const n = 5;
//   console.log(arrangeCoins(n));
  

// //   Q 3

// function sortedSquares(nums) {
//     const squaredArray = nums.map(num => num ** 2);
//     squaredArray.sort((a, b) => a - b);
//     return squaredArray;
//   }
  
//   // Example usage:
//   const nums = [-4, -1, 0, 3, 10];
//   console.log(sortedSquares(nums));
  

// // For the given example, the output will be [0, 1, 9, 16, 100] after squaring the numbers and sorting them in non-decreasing order.

// // Q 4

// function findDisjoint(nums1, nums2) {
//     const set1 = new Set(nums1);
//     const set2 = new Set(nums2);
  
//     const answer1 = Array.from(set1).filter(num => !set2.has(num));
//     const answer2 = Array.from(set2).filter(num => !set1.has(num));
  
//     return [answer1, answer2];
//   }
  
//   // Example usage:
//   const nums1 = [1, 2, 3];
//   const nums2 = [2, 4, 6];
//   console.log(findDisjoint(nums1, nums2));

// //   For the given example, the output will be [[1, 3], [4, 6]] as 1 and 3 are distinct integers in nums1 but not in nums2, and 4 and 6 are distinct integers in nums2 but not in nums1.

// // Q 5

// function findDistanceValue(arr1, arr2, d) {
//     let distance = 0;
  
//     for (let i = 0; i < arr1.length; i++) {
//       let hasCloseElement = false;
  
//       for (let j = 0; j < arr2.length; j++) {
//         if (Math.abs(arr1[i] - arr2[j]) <= d) {
//           hasCloseElement = true;
//           break;
//         }
//       }
  
//       if (!hasCloseElement) {
//         distance++;
//       }
//     }
  
//     return distance;
//   }
  
//   // Example usage:
//   const arr1 = [4, 5, 8];
//   const arr2 = [10, 9, 1, 8];
//   const d = 2;
//   console.log(findDistanceValue(arr1, arr2, d));

// //   For the given example, the output will be 2 because there are two elements in arr1 (8 and 5) that do not have any corresponding element in arr2 satisfying the given condition.

// // Q 6

// function findDuplicates(nums) {
//     const result = [];
  
//     for (let i = 0; i < nums.length; i++) {
//       const index = Math.abs(nums[i]) - 1;
  
//       if (nums[index] < 0) {
//         result.push(index + 1);
//       } else {
//         nums[index] = -nums[index];
//       }
//     }
  
//     return result;
//   }
  
//   // Example usage:
//   const nums = [4, 3, 2, 7, 8, 2, 3, 1];
//   console.log(findDuplicates(nums));
  

// //   For the given example, the output will be [2, 3] because the elements 2 and 3 appear twice in the nums array.

// // Q 7

// function findMin(nums) {
//     let left = 0;
//     let right = nums.length - 1;
  
//     while (left < right) {
//       const mid = Math.floor((left + right) / 2);
  
//       if (nums[mid] > nums[right]) {
//         left = mid + 1;
//       } else {
//         right = mid;
//       }
//     }
  
//     return nums[left];
//   }
  
//   // Example usage:
//   const nums = [3, 4, 5, 1, 2];
//   console.log(findMin(nums));

// //   For the given example, the output will be 1 because the minimum element in the rotated array [3, 4, 5, 1, 2] is 1.

// // Q 8

// function findOriginalArray(changed) {
//     if (changed.length % 2 !== 0) {
//       return [];
//     }
  
//     const frequency = new Map();
//     const original = [];
  
//     for (const num of changed) {
//       if (frequency.has(num)) {
//         frequency.set(num, frequency.get(num) - 1);
  
//         if (frequency.get(num) === 0) {
//           frequency.delete(num);
//         }
  
//         original.push(num / 2);
//       } else {
//         const doubleNum = num * 2;
  
//         if (frequency.has(doubleNum)) {
//           frequency.set(doubleNum, frequency.get(doubleNum) + 1);
//         } else {
//           frequency.set(doubleNum, 1);
//         }
//       }
//     }
  
//     if (frequency.size === 0) {
//       return original;
//     } else {
//       return [];
//     }
//   }
  
//   // Example usage:
//   const changed = [1, 3, 4, 2, 6, 8];
//   console.log(findOriginalArray(changed));

// //   For the given example, the output will be [1, 3, 4] because the transformed array [1, 3, 4, 2, 6, 8] can be converted back to the original array [1, 3, 4] by appending twice the value of each element and shuffling.