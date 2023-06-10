// Q 1

function isPowerOfTwo(n) {
    if (n <= 0) {
      return false;
    }
  
    while (n > 1) {
      if (n % 2 !== 0) {
        return false;
      }
      n /= 2;
    }
  
    return true;
  }
  
  // Example usage:
  console.log(isPowerOfTwo(1)); // Output: true
  console.log(isPowerOfTwo(16)); // Output: true
  console.log(isPowerOfTwo(3)); // Output: false
  
// Q 2

function sumOfFirstNNumbers(n) {
    if (n <= 0) {
      return 0;
    }
  
    return (n * (n + 1)) / 2;
  }
  
  // Example usage:
  console.log(sumOfFirstNNumbers(3)); // Output: 6
  console.log(sumOfFirstNNumbers(5)); // Output: 15
  

// Q 3

function factorial(N) {
    if (N === 0 || N === 1) {
      return 1;
    }
  
    let result = 1;
    for (let i = 2; i <= N; i++) {
      result *= i;
    }
  
    return result;
  }
  
  // Example usage:
  console.log(factorial(5)); // Output: 120
  console.log(factorial(4)); // Output: 24
  

// Q 4

function exponentiation(N, P) {
  return Math.pow(N, P);
}

// Example usage:
console.log(exponentiation(5, 2)); // Output: 25
console.log(exponentiation(2, 5)); // Output: 32


// Q 5

function findMaxRecursive(arr, start, end) {
  if (start === end) {
    return arr[start];
  }

  const mid = Math.floor((start + end) / 2);
  const leftMax = findMaxRecursive(arr, start, mid);
  const rightMax = findMaxRecursive(arr, mid + 1, end);

  return Math.max(leftMax, rightMax);
}

function findMax(arr) {
  return findMaxRecursive(arr, 0, arr.length - 1);
}

// Example usage:
console.log(findMax([1, 4, 3, -5, -4, 8, 6])); // Output: 8
console.log(findMax([1, 4, 45, 6, 10, -8])); // Output: 45


// Q 6

function findNthTerm(a, d, N) {
  return a + (N - 1) * d;
}

// Example usage:
console.log(findNthTerm(2, 1, 5)); // Output: 6
console.log(findNthTerm(5, 2, 10)); // Output: 23


// Q 7

function swap(str, i, j) {
  const temp = str[i];
  const charArray = str.split("");
  charArray[i] = charArray[j];
  charArray[j] = temp;
  return charArray.join("");
}

function permute(str, left, right, permutations) {
  if (left === right) {
    permutations.push(str);
    return;
  }

  for (let i = left; i <= right; i++) {
    str = swap(str, left, i);
    permute(str, left + 1, right, permutations);
    str = swap(str, left, i); // backtrack
  }
}

function printPermutations(S) {
  const permutations = [];
  const str = S.split("");
  permute(str, 0, str.length - 1, permutations);
  return permutations;
}

// Example usage:
console.log(printPermutations("ABC")); // Output: ["ABC", "ACB", "BAC", "BCA", "CBA", "CAB"]
console.log(printPermutations("XY")); // Output: ["XY", "YX"]


// Q 8

function getProductOfArray(arr) {
  let product = 1;

  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }

  return product;
}

// Example usage:
console.log(getProductOfArray([1, 2, 3, 4, 5])); // Output: 120
console.log(getProductOfArray([1, 6, 3])); // Output: 18
