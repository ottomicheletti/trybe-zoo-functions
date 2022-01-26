const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');
const getSpeciesByIds = require('./getSpeciesByIds');

const chamaFuncionarioPeloId = (id) => employees.find((employee) => employee.id === id);
const chamaFuncionarioPelosNomes = (nome) => employees
  .find((employee) => employee.firstName === nome || employee.lastName === nome);

function objName(obj) {
  const dados = chamaFuncionarioPelosNomes(obj.name);

  if (dados) {
    const responsible = [];
    const locals = [];
    dados.responsibleFor.forEach((entry) => responsible
      .push(getSpeciesByIds(entry)[0].name) && locals.push(getSpeciesByIds(entry)[0].location));

    return {
      id: `${dados.id}`,
      fullName: `${dados.firstName} ${dados.lastName}`,
      species: responsible,
      locations: locals,
    };
  }
  throw new Error('Informações inválidas');
}

function objId(obj) {
  const dados = chamaFuncionarioPeloId(obj.id);

  if (dados) {
    const responsible = [];
    const locals = [];
    dados.responsibleFor.forEach((entry) => responsible
      .push(getSpeciesByIds(entry)[0].name) && locals.push(getSpeciesByIds(entry)[0].location));

    return {
      id: `${dados.id}`,
      fullName: `${dados.firstName} ${dados.lastName}`,
      species: responsible,
      locations: locals,
    };
  }
  throw new Error('Informações inválidas');
}

function objVazio() {
  const funcionarios = Object.values(employees);
  const result = [];
  funcionarios.forEach((funcionario, index) => {
    const responsible = [];
    const locals = [];
    funcionario.responsibleFor.forEach((entry) => responsible
      .push(getSpeciesByIds(entry)[0].name) && locals.push(getSpeciesByIds(entry)[0].location));

    result.push(
      {
        id: `${funcionario.id}`,
        fullName: `${funcionario.firstName} ${funcionario.lastName}`,
        species: responsible,
        locations: locals,
      },
    );
  });
  return result;
}

function getEmployeesCoverage(obj) {
  if (!obj) {
    return objVazio();
  }
  if (obj.name) {
    return objName(obj);
  }
  if (obj.id) {
    return objId(obj);
  }
}

module.exports = getEmployeesCoverage;
