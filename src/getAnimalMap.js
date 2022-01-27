const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const regioes = {
  NE: [],
  NW: [],
  SE: [],
  SW: [],
};

const animaisDaRegiao = (regiao) => species.filter(({ location }) => location === regiao)
  .map(({ name }) => name);
const nomesDosAnimais = (animal) => species.find(({ name }) => name === animal).residents
  .map(({ name }) => name);
const nomesDosAnimaisSortidos = (animal) => species.find(({ name }) => name === animal).residents
  .map(({ name }) => name).sort();
const animaisDaRegiaoPorSexo = (animal, sexo) => species.find(({ name }) => name === animal)
  .residents.filter(({ sex }) => sex === sexo).map(({ name }) => name);
const animaisDaRegiaoPorSexoENome = (animal, sexo) => species.find(({ name }) => name === animal)
  .residents.filter(({ sex }) => sex === sexo).map(({ name }) => name).sort();

const animaisComNomes = (regiao) => {
  const arrayAnimais = [];
  animaisDaRegiao(regiao).forEach((animal, index) => {
    const Animal = {};
    Animal[animal] = nomesDosAnimais(animal);
    arrayAnimais[index] = Animal;
  });
  return arrayAnimais;
};

const animaisComNomesSortidos = (regiao) => {
  const arrayAnimais = [];
  animaisDaRegiao(regiao).forEach((animal, index) => {
    const Animal = {};
    Animal[animal] = nomesDosAnimaisSortidos(animal);
    arrayAnimais[index] = Animal;
  });
  return arrayAnimais;
};

const animaisSortidosPorSexoComNomes = (regiao, sexo) => {
  const arrayAnimais = [];
  animaisDaRegiao(regiao).forEach((animal, index) => {
    const Animal = {};
    Animal[animal] = animaisDaRegiaoPorSexo(animal, sexo);
    arrayAnimais[index] = Animal;
  });
  return arrayAnimais;
};

const animaisSortidosPorSexoComNomesSortidos = (regiao, sexo) => {
  const arrayAnimais = [];
  animaisDaRegiao(regiao).forEach((animal, index) => {
    const Animal = {};
    Animal[animal] = animaisDaRegiaoPorSexoENome(animal, sexo);
    arrayAnimais[index] = Animal;
  });
  return arrayAnimais;
};

const divisaoPorRegioes = () => {
  regioes.NE = animaisDaRegiao('NE');
  regioes.NW = animaisDaRegiao('NW');
  regioes.SE = animaisDaRegiao('SE');
  regioes.SW = animaisDaRegiao('SW');
  return regioes;
};

const divisaoPorRegioesComNomes = () => {
  regioes.NE = animaisComNomes('NE');
  regioes.NW = animaisComNomes('NW');
  regioes.SE = animaisComNomes('SE');
  regioes.SW = animaisComNomes('SW');
  return regioes;
};

const divisaoPorRegioesComNomesSortidos = () => {
  regioes.NE = animaisComNomesSortidos('NE');
  regioes.NW = animaisComNomesSortidos('NW');
  regioes.SE = animaisComNomesSortidos('SE');
  regioes.SW = animaisComNomesSortidos('SW');
  return regioes;
};

const divisaoPorRegioesESexo = (sexo = 'female') => {
  regioes.NE = animaisSortidosPorSexoComNomes('NE', sexo);
  regioes.NW = animaisSortidosPorSexoComNomes('NW', sexo);
  regioes.SE = animaisSortidosPorSexoComNomes('SE', sexo);
  regioes.SW = animaisSortidosPorSexoComNomes('SW', sexo);
  return regioes;
};

const divisaoPorRegioesComNomesSortidosESexo = (sexo = 'female') => {
  regioes.NE = animaisSortidosPorSexoComNomesSortidos('NE', sexo);
  regioes.NW = animaisSortidosPorSexoComNomesSortidos('NW', sexo);
  regioes.SE = animaisSortidosPorSexoComNomesSortidos('SE', sexo);
  regioes.SW = animaisSortidosPorSexoComNomesSortidos('SW', sexo);
  return regioes;
};

const getAnimalMap = (options) => {
  const objs = [
    [{ includeNames: true, sex: 'female', sorted: true }, divisaoPorRegioesComNomesSortidosESexo],
    [{ includeNames: true, sex: 'female' }, divisaoPorRegioesESexo],
    [{ includeNames: true, sorted: true }, divisaoPorRegioesComNomesSortidos],
    [{ includeNames: true }, divisaoPorRegioesComNomes],
    [{ sex: 'female', sorted: true }, divisaoPorRegioes],
    [{ sex: 'female' }, divisaoPorRegioes],
    [undefined, divisaoPorRegioes],
  ];

  let result = {};
  for (let index = 0; index < objs.length; index += 1) {
    if (JSON.stringify(objs[index][0]) === JSON.stringify(options)) {
      result = objs[index][1]();
    }
  }
  return result;
};

module.exports = getAnimalMap;
