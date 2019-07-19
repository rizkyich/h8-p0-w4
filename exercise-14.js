function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  //init variable result to return
  var result = [];
  
  // handler for no value
  if (arrPenumpang[0] === undefined) {
    return '[]';
  }
  
  // loop through array 
  for (var i = 0; i < arrPenumpang.length; i++) {
    // assign array[index] to variable
    // init empty object
    var passanger = arrPenumpang[i];
    var objPassanger = {};
    
    // assign key and value to object
    objPassanger.penumpang = passanger[0];
    objPassanger.naikDari = passanger[1];
    objPassanger.tujuan = passanger[2];

    // calculate cost from rute array
    var costs = 2000 * (rute.indexOf(objPassanger.tujuan) - rute.indexOf(objPassanger.naikDari));
    objPassanger.bayar = costs;
    
    // push object into result array
    result.push(objPassanger);
  }

  return result;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]