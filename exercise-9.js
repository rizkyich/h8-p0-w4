function checkAB(num) {
  // you can only write your code here!
  // ini variable to store position A and B
  var positionA = 0;
  var positionB = 0;
 
  // loop through to find the position
  for (var i = 0; i < num.length; i++) {
    if (num[i] === 'a') {
      positionA = i;
    }
    if (num[i] === 'b') {
      positionB = i;
    }
  }

  // create new string contain letter from position A to posiiton B
  var newStr = '';
  newStr = num.substring(positionA, positionB);

  // condition if new string length bigger than 3 and there is position B
  // return true
  if (newStr.length > 3 && positionB !== 0) {
    return true;
  }

  // conditionn if position B is empty or new string length is lower tahn 3
  // return false 
  if (newStr.length > 3 && positionB === 0 || newStr.length < 3) {
    return false;
  }
  
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false
