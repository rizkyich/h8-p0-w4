function cariMedian(arr) {
  // you can only write your code here!
  // init variable median and position
  var median = 0;
  var position = 0;
  var position2 = 0;

  // condition if arr.length is odd
  if (arr.length % 2 !== 0) {
    position = Math.round(arr.length / 2);
    median = arr[position - 1];
  }

  // condition if arr.length is even
  else {
    position = (arr.length / 2) - 1;
    position2 = position + 1;
    // console.log('position1: ' +position1 );
    // console.log('position2: ' +position2 );
    median = (arr[position] + arr[position2]) / 2;
  }

  return median;
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5