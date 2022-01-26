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

module.exports = { calculateEntry, countEntrants };
