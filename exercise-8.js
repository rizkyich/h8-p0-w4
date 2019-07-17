function tukarBesarKecil(kalimat) {
  // you can only write your code here!
  // init variable result
  var changeCapital = ''

  // loop through kalimat
  for (var i = 0; i < kalimat.length; i++) {
    
    // conditional to check kalimat[index] uppercase or not
    if (kalimat[i] === kalimat[i].toUpperCase()) {
      changeCapital += kalimat[i].toLowerCase()
    } else {
      changeCapital += kalimat[i].toUpperCase()
    }

  }

  return changeCapital;
}


// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"