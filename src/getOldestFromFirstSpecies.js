const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const funcionario = employees.find((pessoa) => pessoa.id === id);
  const primeiroAnimal = funcionario.responsibleFor[0];
  const animais = species.find((bicho) => bicho.id === primeiroAnimal);
  const animal = animais.residents.sort((a, b) => b.age - a.age)[0];

  return [`${animal.name}`, `${animal.sex}`, animal.age];
}

module.exports = getOldestFromFirstSpecies;
