// // Q 1

// function reconstructPermutation(s) {
//     const n = s.length;
//     const perm = [];
//     let start = 0;
//     let end = n;
  
//     for (let i = 0; i < n; i++) {
//       if (s[i] === 'I') {
//         perm.push(start);
//         start++;
//       } else {
//         perm.push(end);
//         end--;
//       }
//     }
  
//     perm.push(start); // or perm.push(end)
  
//     return perm;
//   }
  
//   const s = "IDID";
//   console.log(reconstructPermutation(s));

  
// //   The reconstructed permutation is [0, 4, 1, 3, 2]. Remember that there can be multiple valid permutations, so the function may return a different valid permutation for the same input.

// // Q 2

// function searchMatrix(matrix, target) {
//     const m = matrix.length;
//     const n = matrix[0].length;
//     let left = 0;
//     let right = m * n - 1;
  
//     while (left <= right) {
//       const mid = Math.floor((left + right) / 2);
//       const row = Math.floor(mid / n);
//       const col = mid % n;
//       const value = matrix[row][col];
  
//       if (value === target) {
//         return true;
//       } else if (value < target) {
//         left = mid + 1;
//       } else {
//         right = mid - 1;
//       }
//     }
  
//     return false;
//   }
  
//   const matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]];
//   const target = 3;
//   console.log(searchMatrix(matrix, target));
  

// //   The target value 3 is present in the matrix, so the function returns true

// // Q 3

// function validMountainArray(arr) {
//     const n = arr.length;
//     if (n < 3) {
//       return false;
//     }
  
//     let left = 0;
//     let right = n - 1;
  
//     while (left + 1 < n && arr[left] < arr[left + 1]) {
//       left++;
//     }
  
//     while (right - 1 >= 0 && arr[right] < arr[right - 1]) {
//       right--;
//     }
  
//     if (left === 0 || right === n - 1 || left === right) {
//       return false;
//     }
  
//     return left === right;
//   }
  
//   const arr = [2, 1];
//   console.log(validMountainArray(arr));

// //   The array [2, 1] does not satisfy the conditions of a valid mountain array, so the function returns false.

// // Q 4

// function findMaxLength(nums) {
//     const n = nums.length;
//     let maxLen = 0;
//     let count = 0;
//     const countMap = {};
  
//     for (let i = 0; i < n; i++) {
//       count += nums[i] === 0 ? -1 : 1;
  
//       if (count === 0) {
//         maxLen = i + 1;
//       } else if (count in countMap) {
//         const length = i - countMap[count];
//         if (length > maxLen) {
//           maxLen = length;
//         }
//       } else {
//         countMap[count] = i;
//       }
//     }
  
//     return maxLen;
//   }
  
//   const nums = [0, 1];
//   console.log(findMaxLength(nums));

// //   The longest contiguous subarray with an equal number of 0s and 1s in the array [0, 1] is [0, 1], which has a length of 2. Therefore, the function returns 2.

// // Q 5

// function minProductSum(nums1, nums2) {
//     nums1.sort((a, b) => a - b);
//     nums2.sort((a, b) => b - a);
  
//     let minProductSum = 0;
//     const n = nums1.length;
  
//     for (let i = 0; i < n; i++) {
//       minProductSum += nums1[i] * nums2[i];
//     }
  
//     return minProductSum;
//   }
  
//   const nums1 = [5, 3, 4, 2];
//   const nums2 = [4, 2, 2, 5];
//   console.log(minProductSum(nums1, nums2));

// //   By rearranging nums1 to [3, 5, 4, 2] and multiplying the corresponding elements with nums2 [4, 2, 2, 5], we get a product sum of 3*4 + 5*2 + 4*2 + 2*5 = 40. Therefore, the function returns 40 as the minimum product sum.

// // Q 6

// function findOriginalArray(changed) {
//     const n = changed.length;
//     if (n % 2 !== 0) {
//       return [];
//     }
  
//     const sorted = changed.slice().sort((a, b) => a - b);
//     const original = [];
  
//     for (let i = n - 1; i >= 0; i--) {
//       const num = sorted[i];
//       if (original.indexOf(num / 2) === -1) {
//         return [];
//       }
//       original.splice(original.indexOf(num / 2), 1);
//     }
  
//     return original;
//   }
  
//   const changed = [1, 3, 4, 2, 6, 8];
//   console.log(findOriginalArray(changed));

// //   The transformed array changed can be obtained from the original array [1, 3, 4] by appending twice the value of each element and shuffling. Therefore, the function returns [1, 3, 4] as the original array.

// // Q 7

// function generateMatrix(n) {
//     const matrix = Array.from({ length: n }, () => Array(n).fill(0)); // Create an n x n matrix filled with zeros
  
//     let num = 1; // Current value to be filled in the matrix
//     let rowStart = 0,
//       rowEnd = n - 1,
//       colStart = 0,
//       colEnd = n - 1; // Define boundaries of the spiral pattern
  
//     while (rowStart <= rowEnd && colStart <= colEnd) {
//       // Fill top row
//       for (let i = colStart; i <= colEnd; i++) {
//         matrix[rowStart][i] = num++;
//       }
//       rowStart++;
  
//       // Fill right column
//       for (let i = rowStart; i <= rowEnd; i++) {
//         matrix[i][colEnd] = num++;
//       }
//       colEnd--;
  
//       // Fill bottom row
//       if (rowStart <= rowEnd) {
//         for (let i = colEnd; i >= colStart; i--) {
//           matrix[rowEnd][i] = num++;
//         }
//         rowEnd--;
//       }
  
//       // Fill left column
//       if (colStart <= colEnd) {
//         for (let i = rowEnd; i >= rowStart; i--) {
//           matrix[i][colStart] = num++;
//         }
//         colStart++;
//       }
//     }
  
//     return matrix;
//   }
  
//   const n = 3;
//   const result = generateMatrix(n);
//   console.log(result);

// //   [[1, 2, 3], [8, 9, 4], [7, 6, 5]]


// // Q 8


// function multiply(mat1, mat2) {
//     const m = mat1.length;
//     const k = mat1[0].length;
//     const n = mat2[0].length;
  
//     const result = Array.from({ length: m }, () => Array(n).fill(0));
  
//     for (let i = 0; i < m; i++) {
//       for (let j = 0; j < k; j++) {
//         if (mat1[i][j] !== 0) {
//           for (let l = 0; l < n; l++) {
//             result[i][l] += mat1[i][j] * mat2[j][l];
//           }
//         }
//       }
//     }
  
//     return result;
//   }
  
//   const mat1 = [[1, 0, 0], [-1, 0, 3]];
//   const mat2 = [[7, 0, 0], [0, 0, 0], [0, 0, 1]];
//   const result = multiply(mat1, mat2);
//   console.log(result);
  