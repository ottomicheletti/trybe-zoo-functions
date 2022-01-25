const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  const superiors = employees.map((employee) => employee.managers);
  const bosses = [];
  superiors.forEach((superior) => superior.forEach((entry) => bosses.push(entry)));
  return bosses.some((boss) => boss === id);
}

function getRelatedEmployees(managerId) {
  const related = [];
  employees.forEach((employee) => employee.managers.forEach((entry) => {
    if (entry === managerId) {
      related.push(`${employee.firstName} ${employee.lastName}`);
    }
  }));
  if (related.length > 0) {
    return related;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

// console.log(getRelatedEmployees('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));

module.exports = { isManager, getRelatedEmployees };
