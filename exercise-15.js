function highestScore(students) {
  // Code disini
  // init empty object to return
  var highestScoreObj = {};

  // making object with given information and add to the empty object
  for (var i = 0; i < students.length; i++) {
    var person = students[i];
    highestScoreObj[person.class] = {
      name: person.name,
      score: person.score
    };
  }

  // making condition then add required condition to object
  for (var j = 0; j < students.length; j++) {
    var highestPerson = students[j];
    if (highestScoreObj[highestPerson.class].score < highestPerson.score) {
      highestScoreObj[highestPerson.class].name = highestPerson.name;
      highestScoreObj[highestPerson.class].score = highestPerson.score;
    }
  }

  return highestScoreObj;
}

// TEST CASE
console.log(highestScore([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}