function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  // init variable to store all factors
  var factorsArr = [];

  // loop to get 2 numbers equals to angka
  for (var i = 1; i <= angka; i++) {
    for (var j = angka; j > 0; j--) {
      if (i * j === angka) {
        
        // change to string to check length property
        var factors = i.toString() + j.toString();
        factorsArr.push(factors);
      }
    }
  }
  // console.log(factorsArr);

  // init variable to store minimum length; stars with 0 index length
  var minimumTemp = factorsArr[0].length;

  // loop the array to find minimum length
  for (var k = 1; k < factorsArr.length; k++) {
    if (factorsArr[k].length < minimumTemp) {
      minimumTemp = factorsArr[k].length;
    }
  }

  return minimumTemp;

}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2