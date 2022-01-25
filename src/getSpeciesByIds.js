const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (!ids) {
    return [];
  } {
    const result = [];
    for (let index = 0; index < ids.length; index += 1) {
      result.push(species.find((animal) => animal.id === ids[index]));
    }
    return result;
  }
}

module.exports = getSpeciesByIds;
