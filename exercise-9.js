function checkAB(num) {
  // you can only write your code here!
  // loop through array 
  for (var i = 0; i < num.length; i++) {
    // find position a
    if (num[i] === 'a') {

      // conditions 4 distance forward and backward if b found return true
      if (num[i + 4] === 'b' || num[i - 4] === 'b') {
        return true;
      } 
    }
  }

  return false;
}

// TEST CASES
console.log(checkAB('lane borrowedab')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false
console.log(checkAB('bbbbbbbbbba'));// true
