function deepSum(arr) {
  // Code disini
  // init variable to return sum of every items in arr
  var result = 0;

  // empty array handler
  if (arr[0] === undefined) {
    return 'No Number';
  } else {

    // loop every level of array until get the items 
    for (var i = 0; i < arr.length; i++) {
      // console.log(arr[i]);
      var secondLevel = arr[i];

      for (var j = 0; j < secondLevel.length; j++) {
        // console.log(arr[i][j]);
        var thirdLevel = secondLevel[j];

        for (var k = 0; k < thirdLevel.length; k++) {
          var items = thirdLevel[k];
          result += items;
        }
      }
    }
  }

  return result;
}

//TEST CASE
console.log(deepSum([
  [
    [4, 5, 6],
    [9, 1, 2, 10],
    [9, 4, 3]
  ],
  [
    [4, 14, 31],
    [9, 10, 18, 12, 20],
    [1, 4, 90]
  ],
  [
    [2, 5, 10],
    [3, 4, 5],
    [2, 4, 5, 10]
  ]
])); // 316

console.log(deepSum([
  [
    [20, 10],
    [15],
    [1, 1]
  ],
  [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    [2],
    [9, 11]
  ],
  [
    [3, 5, 1],
    [1, 5, 3],
    [1]
  ],
  [
    [2]
  ]
])); // 156

console.log(deepSum([])); // No number