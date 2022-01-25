const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(specie) {
  if (!specie) {
    return species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
  }
  if (specie.specie.length > 0 && specie.sex === undefined) {
    return species.find((animal) => animal.name === specie.specie).residents.length;
  }
  if (specie.sex.length > 0) {
    return species.find((animal) => animal.name === specie.specie)
      .residents.filter((bicho) => bicho.sex === specie.sex).length;
  }
}

module.exports = countAnimals;
