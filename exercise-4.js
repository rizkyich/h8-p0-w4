function cariModus(arr) {
  // you can only write your code here!
  // init variable
  var frequency = 0;
  var greatestFrequency = 0;
  var modus = 0;

  // loop to check most frequence number in array and store it in modus variable
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      //console.log(arr[i]+ '-' + arr[j]);
      if (arr[i] === arr[j] && i !== j) {
        frequency++;
        if (frequency > greatestFrequency) {
          greatestFrequency = frequency;
          modus = i;
        }
      }
    }
  }
  // console.log(modus);

  // loop to check if array have same number then return -1
  var sameNumber = 0;
  var isSame = false;
  for (var k = 0; k < arr.length; k++) {
    sameNumber += arr[k];
    // condition for same numbers
    isSame = sameNumber / arr.length === arr[k]


    if (isSame || modus === 0) {
      return -1;
    }
  }

  return arr[modus]
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
console.log(cariModus([10, 4, 5, 2, 4, 2, 2]));