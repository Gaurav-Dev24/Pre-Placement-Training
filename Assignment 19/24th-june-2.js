// Q 1

class ListNode {
    constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function mergeKLists(lists) {
    if (lists.length === 0) {
      return null;
    }
  
    while (lists.length > 1) {
      const mergedLists = [];
  
      for (let i = 0; i < lists.length; i += 2) {
        const l1 = lists[i];
        const l2 = lists[i + 1];
  
        mergedLists.push(mergeTwoLists(l1, l2));
      }
  
      lists = mergedLists;
    }
  
    return lists[0];
  }
  
  function mergeTwoLists(l1, l2) {
    const dummy = new ListNode();
    let current = dummy;
  
    while (l1 !== null && l2 !== null) {
      if (l1.val < l2.val) {
        current.next = l1;
        l1 = l1.next;
      } else {
        current.next = l2;
        l2 = l2.next;
      }
      current = current.next;
    }
  
    if (l1 !== null) {
      current.next = l1;
    } else if (l2 !== null) {
      current.next = l2;
    }
  
    return dummy.next;
  }
  
  // Example usage:
  const lists = [
    createLinkedList([1, 4, 5]),
    createLinkedList([1, 3, 4]),
    createLinkedList([2, 6])
  ];
  
  const mergedList = mergeKLists(lists);
  printLinkedList(mergedList);
  
  // Helper function to create a linked list from an array
  function createLinkedList(arr) {
    const dummy = new ListNode();
    let current = dummy;
  
    for (let i = 0; i < arr.length; i++) {
      current.next = new ListNode(arr[i]);
      current = current.next;
    }
  
    return dummy.next;
  }
  
  // Helper function to print the linked list values
  function printLinkedList(head) {
    let current = head;
    const values = [];
  
    while (current !== null) {
      values.push(current.val);
      current = current.next;
    }
  
    console.log(values);
  }
  
// Q 2

function countSmaller(nums) {
    const counts = new Array(nums.length).fill(0);
    const indices = nums.map((num, index) => index);
  
    mergeSort(nums, indices, counts, 0, nums.length - 1);
  
    return counts;
  }
  
  function mergeSort(nums, indices, counts, start, end) {
    if (start >= end) {
      return;
    }
  
    const mid = Math.floor((start + end) / 2);
    mergeSort(nums, indices, counts, start, mid);
    mergeSort(nums, indices, counts, mid + 1, end);
  
    merge(nums, indices, counts, start, mid, end);
  }
  
  function merge(nums, indices, counts, start, mid, end) {
    const merged = [];
    let leftIndex = start;
    let rightIndex = mid + 1;
    let rightCount = 0;
  
    while (leftIndex <= mid && rightIndex <= end) {
      if (nums[indices[rightIndex]] < nums[indices[leftIndex]]) {
        merged.push(indices[rightIndex]);
        rightCount++;
        rightIndex++;
      } else {
        merged.push(indices[leftIndex]);
        counts[indices[leftIndex]] += rightCount;
        leftIndex++;
      }
    }
  
    while (leftIndex <= mid) {
      merged.push(indices[leftIndex]);
      counts[indices[leftIndex]] += rightCount;
      leftIndex++;
    }
  
    while (rightIndex <= end) {
      merged.push(indices[rightIndex]);
      rightIndex++;
    }
  
    for (let i = start; i <= end; i++) {
      indices[i] = merged[i - start];
    }
  }
  
  // Example usage:
  const nums = [5, 2, 6, 1];
  const result = countSmaller(nums);
  console.log(result); // [2, 1, 1, 0]
  
// Q 3

function sortArray(nums) {
    if (nums.length <= 1) {
      return nums;
    }
  
    const mid = Math.floor(nums.length / 2);
    const left = nums.slice(0, mid);
    const right = nums.slice(mid);
  
    return merge(sortArray(left), sortArray(right));
  }
  
  function merge(left, right) {
    const merged = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        merged.push(left[leftIndex]);
        leftIndex++;
      } else {
        merged.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    while (leftIndex < left.length) {
      merged.push(left[leftIndex]);
      leftIndex++;
    }
  
    while (rightIndex < right.length) {
      merged.push(right[rightIndex]);
      rightIndex++;
    }
  
    return merged;
  }
  
  // Example usage:
  const num1 = [5, 2, 3, 1];
  const sortedArray = sortArray(num1);
  console.log(sortedArray); // [1, 2, 3, 5]
  
// Q 4

function moveZeroesToEnd(arr) {
    let nonZeroIndex = 0;
  
    // Move all the non-zero elements to the left side of the array
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) {
        arr[nonZeroIndex] = arr[i];
        nonZeroIndex++;
      }
    }
  
    // Fill the remaining elements with zeroes
    for (let i = nonZeroIndex; i < arr.length; i++) {
      arr[i] = 0;
    }
  
    return arr;
  }
  
  // Example usage:
  const arr = [1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0];
  const result1 = moveZeroesToEnd(arr);
  console.log(result1); // [1, 9, 8, 4, 2, 7, 6, 0, 0, 0, 0]
  
// Q 5

function alternatePosNeg(arr) {
    let positiveIndex = 0;
    let negativeIndex = 0;
  
    // Find the index of the first positive number
    while (positiveIndex < arr.length && arr[positiveIndex] < 0) {
      positiveIndex++;
    }
  
    // Rearrange the array by swapping positive and negative numbers
    while (positiveIndex < arr.length && negativeIndex < positiveIndex && arr[negativeIndex] < 0) {
      const temp = arr[positiveIndex];
      arr[positiveIndex] = arr[negativeIndex];
      arr[negativeIndex] = temp;
  
      positiveIndex++;
      negativeIndex += 2;
    }
  
    return arr;
  }
  
  // Example usage:
  const arr1 = [1, 2, 3, -4, -1, 4];
  const resultOne = alternatePosNeg(arr1);
  console.log(resultOne); // [-4, 1, -1, 2, 3, 4]
  
  const arr2 = [-5, -2, 5, 2, 4, 7, 1, 8, 0, -8];
  const resultTwo = alternatePosNeg(arr2);
  console.log(resultTwo); // [-5, 5, -2, 2, -8, 4, 7, 1, 8, 0]
  
// Q 6

function mergeSortedArrays(arr1, arr2) {
    const merged = [];
    let i = 0; // Pointer for arr1
    let j = 0; // Pointer for arr2
  
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] <= arr2[j]) {
        merged.push(arr1[i]);
        i++;
      } else {
        merged.push(arr2[j]);
        j++;
      }
    }
  
    // Add remaining elements from arr1 (if any)
    while (i < arr1.length) {
      merged.push(arr1[i]);
      i++;
    }
  
    // Add remaining elements from arr2 (if any)
    while (j < arr2.length) {
      merged.push(arr2[j]);
      j++;
    }
  
    return merged;
  }
  
  // Example usage:
  const arr1 = [1, 3, 4, 5];
  const arr2 = [2, 4, 6, 8];
  const mergedArray1 = mergeSortedArrays(arr1, arr2);
  console.log(mergedArray1); // [1, 2, 3, 4, 4, 5, 6, 8]
  
  const arr3 = [5, 8, 9];
  const arr4 = [4, 7, 8];
  const mergedArray2 = mergeSortedArrays(arr3, arr4);
  console.log(mergedArray2); // [4, 5, 7, 8, 8, 9]
  
// Q 7

function intersection(nums1, nums2) {
    const set1 = new Set(nums1);
    const result = new Set();
  
    for (let num of nums2) {
      if (set1.has(num)) {
        result.add(num);
      }
    }
  
    return Array.from(result);
  }
  
  // Example usage:
  const nums1 = [1, 2, 2, 1];
  const nums2 = [2, 2];
  const intersect = intersection(nums1, nums2);
  console.log(intersect); // [2]
  
// Q 8

function intersection(nums1, nums2) {
    const map1 = createFrequencyMap(nums1);
    const map2 = createFrequencyMap(nums2);
    const result = [];
  
    for (let num of map1.keys()) {
      if (map2.has(num)) {
        const minFreq = Math.min(map1.get(num), map2.get(num));
        for (let i = 0; i < minFreq; i++) {
          result.push(num);
        }
      }
    }
  
    return result;
  }
  
  function createFrequencyMap(nums) {
    const map = new Map();
  
    for (let num of nums) {
      if (map.has(num)) {
        map.set(num, map.get(num) + 1);
      } else {
        map.set(num, 1);
      }
    }
  
    return map;
  }
  
  // Example usage:
  const nums1 = [1, 2, 2, 1];
  const nums2 = [2, 2];
  const intersect = intersection(nums1, nums2);
  console.log(intersect); // [2, 2]
  