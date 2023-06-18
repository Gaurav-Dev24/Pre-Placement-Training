function mySqrt(x) {
    if (x === 0) {
      return 0;
    }
    
    let left = 1;
    let right = x;
    
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      
      if (mid * mid === x) {
        return mid;
      } else if (mid * mid > x) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    
    return right;
  }
  
  console.log(mySqrt(4));  // Output: 2
  console.log(mySqrt(8));  // Output: 2
  