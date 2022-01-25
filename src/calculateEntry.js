const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter((person) => person.age < 18).length;
  const adult = entrants.filter((person) => person.age >= 18 && person.age < 50).length;
  const senior = entrants.filter((person) => person.age >= 50).length;
  return {
    child,
    adult,
    senior,
  };
}

function calculateEntry(entrants) {
  if (!entrants || !entrants[0]) {
    return 0;
  } {
    const tourists = countEntrants(entrants);
    return tourists.child * 20.99 + tourists.adult * 49.99 + tourists.senior * 24.99;
  }
}

// console.log(calculateEntry([
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ]));

module.exports = { calculateEntry, countEntrants };
