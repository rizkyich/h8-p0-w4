function changeMe(arr) {
  // init empty object to store
  var toObject = {};

  // loop to get each elements of array
  for (var i = 0; i < arr.length; i++) {

    toObject.firstName = arr[i][0];
    toObject.lastName = arr[i][1];
    toObject.gender = arr[i][2];

    // age handler
    if (arr[i][3] <= 2019) {
      toObject.age = 2019 - arr[i][3];
    } else {
      toObject.age = "Invalid Birth Year";
    }

    console.log((i + 1) + ". " + toObject.firstName + " " + toObject.lastName + ":");
    console.log(toObject);
  }
}

// changeMe(['Christ', 'Evans', 'Male', 1982])


// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
// changeMe([]); // ""