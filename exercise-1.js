function angkaPrima(angka) {
  // loop to divide angka with numbers before angka
  for (var i = 2; i < angka; i++) {
    var modulo = angka % i;
    // console.log(modulo);

    // conditionals to check if modulo equals to 0 then not prime number
    if (modulo === 0) {
      return false;
    }
  }
  return true;
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false