function fpb(angka1, angka2) {
  // you can only write your code here!
  //init empty array to store divider for angka1 and angka2
  var dividerAngka1 = [];
  var dividerAngka2 = [];

  // loop to find every divider for Angka1 and Angka2 and push into array
  for (var i = 1; i <= angka1; i++) {
    if (angka1 % i === 0) {
      dividerAngka1.push(i);
    }
  }

  for (var j = 1; j <= angka2; j++) {
    if (angka2 % j === 0) {
      dividerAngka2.push(j);
    }
  }

  // console.log(dividerAngka1);
  // console.log(dividerAngka2);

  // Merge every same divider from Angka1 and Angka2 into one array
  var dividerAngka12 = [];
  for (var k = 0; k < dividerAngka1.length; k++) {
    for (var l = 0; l < dividerAngka2.length; l++) {
      if (dividerAngka1[k] === dividerAngka2[l]) {
        dividerAngka12.push(dividerAngka1[k])
       }
    }
  }
  
  // return last item
  return dividerAngka12[dividerAngka12.length -1];
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
