function urutkanAbjad(str) {
  // you can only write your code here!
  // init variable library of letters and result
  var library = 'abcdefghijklmnopqrstuvwxyz'
  var result = '';
  
  // loop to find the same index between library and str
  for(var i =0; i < library.length; i++) {
    for(var j = 0; j < str.length; j++) {
      if(library[i] === str[j]) {
        result += str[j];
      }
    }
  }

  return result;
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'