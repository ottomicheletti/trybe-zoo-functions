const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (!ids) {
    return [];
  } else {
    let result = [];
    for (let index = 0; index < ids.length; index += 1) {
      result.push(species.find((animal) => animal.id === ids[index]));
    }
    return result;
  }
}

console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce', 'e8481c1d-42ea-4610-8e11-1752cfc05a46'));

module.exports = getSpeciesByIds;
