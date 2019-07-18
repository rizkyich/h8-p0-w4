function checkAB(num) {
  // you can only write your code here!
  // split all characters into array except spaces ' ' 
  var noSpaces = [];
  for (var i = 0; i < num.length; i++) {
    if (num[i] !== ' ') {
      noSpaces.push(num[i]);
    }
  }

  // Find a position and b posotion to find distance 
  for (var j = 0; j < noSpaces.length; j++) {
    if (noSpaces[j] === 'a') {
      for (var k = j; k <= (j + 3); k++) {
        if (noSpaces[k] === 'b') {
          return true;
        } 
      }
    }
  }

  return false;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false