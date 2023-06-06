// Q 1

function isIsomorphic(s, t) {
    if (s.length !== t.length) {
      return false;
    }
  
    const sMap = new Map();
    const tMap = new Map();
  
    for (let i = 0; i < s.length; i++) {
      const sChar = s[i];
      const tChar = t[i];
  
      if (!sMap.has(sChar) && !tMap.has(tChar)) {
        sMap.set(sChar, tChar);
        tMap.set(tChar, sChar);
      } else if (sMap.get(sChar) !== tChar || tMap.get(tChar) !== sChar) {
        return false;
      }
    }
  
    return true;
  }
  
  // Example usage:
  const s = "egg";
  const t = "add";
  console.log(isIsomorphic(s, t)); // Output: true
  

//   Q 2

function isStrobogrammatic(num) {
    const strobogrammaticMap = {
      '0': '0',
      '1': '1',
      '6': '9',
      '8': '8',
      '9': '6',
    };
  
    let left = 0;
    let right = num.length - 1;
  
    while (left <= right) {
      const leftDigit = num[left];
      const rightDigit = num[right];
  
      if (!(leftDigit in strobogrammaticMap) || strobogrammaticMap[leftDigit] !== rightDigit) {
        return false;
      }
  
      left++;
      right--;
    }
  
    return true;
  }
  
  // Example usage:
  const num = "69";
  console.log(isStrobogrammatic(num)); // Output: true
  

//   Q 3

function addStrings(num1, num2) {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let carry = 0;
    let result = '';
  
    while (i >= 0 || j >= 0 || carry > 0) {
      const digit1 = i >= 0 ? parseInt(num1[i]) : 0;
      const digit2 = j >= 0 ? parseInt(num2[j]) : 0;
  
      const sum = digit1 + digit2 + carry;
      const digit = sum % 10;
      carry = Math.floor(sum / 10);
  
      result = digit + result;
  
      i--;
      j--;
    }
  
    return result;
  }
  
  // Example usage:
  const num1 = "11";
  const num2 = "123";
  console.log(addStrings(num1, num2)); // Output: "134"
  

// Q 4

function reverseWords(s) {
    const words = s.split(' ');
  
    for (let i = 0; i < words.length; i++) {
      words[i] = reverseString(words[i]);
    }
  
    return words.join(' ');
  }
  
  function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }
  
  // Example usage:
  const str = "Let's take LeetCode contest";
  console.log(reverseWords(str)); // Output: "s'teL ekat edoCteeL tsetnoc"
  

// Q 5

function reverseStr(s, k) {
    const chars = s.split('');
  
    for (let i = 0; i < chars.length; i += 2 * k) {
      let left = i;
      let right = Math.min(i + k - 1, chars.length - 1);
  
      while (left < right) {
        const temp = chars[left];
        chars[left] = chars[right];
        chars[right] = temp;
  
        left++;
        right--;
      }
    }
  
    return chars.join('');
  }
  
  // Example usage:
  const string = "abcdefg";
  const k = 2;
  console.log(reverseStr(string, k)); // Output: "bacdfeg"
  

// Q 6

function rotateString(s, goal) {
    if (s.length !== goal.length) {
      return false;
    }
  
    const concatenated = s + s;
  
    if (concatenated.includes(goal)) {
      return true;
    }
  
    return false;
  }
  
  // Example usage:
  const word = "abcde";
  const goal = "cdeab";
  console.log(rotateString(word, goal)); // Output: true
  

// Q 7

function backspaceCompare(s, t) {
    const stackS = [];
    const stackT = [];
  
    for (let char of s) {
      if (char === '#') {
        stackS.pop();
      } else {
        stackS.push(char);
      }
    }
  
    for (let char of t) {
      if (char === '#') {
        stackT.pop();
      } else {
        stackT.push(char);
      }
    }
  
    return stackS.join('') === stackT.join('');
  }
  
  // Example usage:
  const s1 = "ab#c";
  const t1 = "ad#c";
  console.log(backspaceCompare(s1, t1)); // Output: true
  

// Q 8

function checkStraightLine(coordinates) {
    const [x0, y0] = coordinates[0];
    const [x1, y1] = coordinates[1];
    const initialSlope = getSlope(x0, y0, x1, y1);
  
    for (let i = 2; i < coordinates.length; i++) {
      const [x, y] = coordinates[i];
      const slope = getSlope(x0, y0, x, y);
  
      if (slope !== initialSlope) {
        return false;
      }
    }
  
    return true;
  }
  
  function getSlope(x1, y1, x2, y2) {
    if (x1 === x2) {
      return Infinity;
    }
  
    return (y2 - y1) / (x2 - x1);
  }
  
  // Example usage:
  const coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]];
  console.log(checkStraightLine(coordinates)); // Output: true
  