// Question - 1

function findCommonElements(arr1, arr2, arr3) {
    let i = 0;
    let j = 0;
    let k = 0;
    const result = [];
  
    while (i < arr1.length && j < arr2.length && k < arr3.length) {
      if (arr1[i] === arr2[j] && arr2[j] === arr3[k]) {
        result.push(arr1[i]);
        i++;
        j++;
        k++;
      } else if (arr1[i] < arr2[j]) {
        i++;
      } else if (arr2[j] < arr3[k]) {
        j++;
      } else {
        k++;
      }
    }
  
    return result;
  }
  
  // Example usage:
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [1, 2, 5, 7, 9];
  const arr3 = [1, 3, 4, 5, 8];
  
  const commonElements = findCommonElements(arr1, arr2, arr3);
  console.log(commonElements);  // Output: [1, 5]

  
//   Question - 2

function findDisjointIntegers(nums1, nums2) {
    const notInNums2 = [];
    const notInNums1 = [];
  
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
  
    for (const num of set1) {
      if (!set2.has(num)) {
        notInNums2.push(num);
      }
    }
  
    for (const num of set2) {
      if (!set1.has(num)) {
        notInNums1.push(num);
      }
    }
  
    return [notInNums1, notInNums2];
  }
  
  // Example usage:
  const nums1 = [1, 2, 3];
  const nums2 = [2, 4, 6];
  
  const disjointIntegers = findDisjointIntegers(nums1, nums2);
  console.log(disjointIntegers);  // Output: [[1, 3], [4, 6]]

  
//   Question - 3

function transposeMatrix(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
  
    const transpose = [];
  
    for (let j = 0; j < cols; j++) {
      const row = [];
      for (let i = 0; i < rows; i++) {
        row.push(matrix[i][j]);
      }
      transpose.push(row);
    }
  
    return transpose;
  }
  
  // Example usage:
  const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  
  const transposedMatrix = transposeMatrix(matrix);
  console.log(transposedMatrix);
  // Output: [[1, 4, 7], [2, 5, 8], [3, 6, 9]]

  
//   Question - 4

function arrayPairSum(nums) {
    nums.sort((a, b) => a - b);
  
    let sum = 0;
    for (let i = 0; i < nums.length; i += 2) {
      sum += nums[i];
    }
  
    return sum;
  }
  
  // Example usage:
  const nums = [1, 4, 3, 2];
  
  const maximizedSum = arrayPairSum(nums);
  console.log(maximizedSum);  // Output: 4

  
//   Question - 5

function arrangeCoins(n) {
    let k = 0;
    let sum = 0;
  
    while (sum <= n) {
      k++;
      sum += k;
    }
  
    return k - 1;
  }
  
  // Example usage:
  const n = 5;
  
  const completeRows = arrangeCoins(n);
  console.log(completeRows);  // Output: 2

  
//   Question - 6

function sortedSquares(nums) {
    const squaredArray = [];
  
    for (let i = 0; i < nums.length; i++) {
      squaredArray.push(nums[i] * nums[i]);
    }
  
    squaredArray.sort((a, b) => a - b);
  
    return squaredArray;
  }
  
  // Example usage:
  const nums = [-4, -1, 0, 3, 10];
  
  const squaredSorted = sortedSquares(nums);
  console.log(squaredSorted);  // Output: [0, 1, 9, 16, 100]

  
//   Question - 7

function maxCount(m, n, ops) {
    let minRow = m;
    let minCol = n;
  
    for (const [ai, bi] of ops) {
      minRow = Math.min(minRow, ai);
      minCol = Math.min(minCol, bi);
    }
  
    return minRow * minCol;
  }
  
  // Example usage:
  const m = 3;
  const n = 3;
  const ops = [[2, 2], [3, 3]];
  
  const maxIntegers = maxCount(m, n, ops);
  console.log(maxIntegers);  // Output: 4

  
//   Question - 8

function shuffle(nums, n) {
    const rearranged = [];
  
    for (let i = 0; i < n; i++) {
      rearranged.push(nums[i]);
      rearranged.push(nums[i + n]);
    }
  
    return rearranged;
  }
  
  // Example usage:
  const nums = [2, 5, 1, 3, 4, 7];
  const n = 3;
  
  const rearrangedArray = shuffle(nums, n);
  console.log(rearrangedArray);  // Output: [2, 3, 5, 4, 1, 7]
  