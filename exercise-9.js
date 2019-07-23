function checkAB(num) {
  // you can only write your code here!
  // loop through array to find position a and b
  for (var a = 0; a < num.length; a++) {
    if (num[a] === 'a') {
      for (var b = a; b <= (a + 4); b++) {
        if (num[b] === 'b') {
          return true;
        }
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
