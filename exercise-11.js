function shoppingTime(memberId, money) {
  // you can only write your code here!
  // object items to buy
  var priceList = {
    "Sepatu Stacattu": 1500000,
    "Baju Zoro": 500000,
    "Baju H&N": 250000,
    "Sweater Uniklooh": 175000,
    "Casing Handphone": 50000,
  }

  // object data person to return
  var dataPerson = {
    memberId: memberId,
    money: money,
    listPurchased: [],
    changeMoney: 0
  }

  // empty array to store items from conditions
  var arrItems = [];

  // handling undefined memberId and money
  if (memberId === '' || (memberId === undefined && money === undefined)) {
    return "Mohon maaf, toko X hanya berlaku untuk member saja";
  } else if (money < 50000) {
    return "Mohon maaf, uang tidak cukup";
  } else if (memberId !== '' && money > 50000) {
    
    // loop in object 
    for (var i in priceList) {

      // condition to compare money with items in priceList object then push into array
      // money minus priceList
      if (money >= priceList[i]) {
        arrItems.push(i);
        money = money - priceList[i];
        // console.log(money);
      }
    }

  }
  // console.log(arrItems);
  // console.log(money);

  // assign value to key in dataPerson
  dataPerson.listPurchased = arrItems;
  dataPerson.changeMoney = money;

  return dataPerson;
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja