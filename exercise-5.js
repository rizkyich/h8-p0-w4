function ubahHuruf(kata) {
  // you can only write your code here!
  // init variable result and library of words in alphabet
  var transformedWord = '';
  var library = 'abcdefghijklmnopqrstuvwxyz';

  // loop to detect index of kata and add by 1
  for (var i = 0; i < kata.length; i++) {
    var nextLetter = library.indexOf(kata[i]) + 1;

    // condition if letter = z
    if (nextLetter === 26) {
      nextLetter = 0;
    }
    
    transformedWord += library[nextLetter];
  }

  return transformedWord;  
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu