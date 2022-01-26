const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const officeHour = (dia) => {
  const diaDaSemana = Object.entries(hours).find((entry) => entry[0] === dia);
  return `Open from ${diaDaSemana[1].open}am until ${diaDaSemana[1].close}pm`;
};

const exhibition = (dia) => {
  const exb = [];
  species.map((animal) => animal.availability).forEach((entry, index) => {
    if (entry.includes(dia)) {
      exb.push(species[index].name);
    }
  });
  return exb;
};

const animals = (animal) => species.find((bicho) => bicho.name === animal).availability;

const fullSchedule = () => {
  const semana = Object.keys(hours);
  const horarios = {};

  semana.forEach((dia) => {
    const { open, close } = hours[dia];

    switch (true) {
    case dia === 'Monday':
      horarios[dia] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
      break;
    default:
      horarios[dia] = { officeHour: `Open from ${open}am until ${close}pm`,
        exhibition: exhibition(dia) };
    }
  });
  return horarios;
};

function getSchedule(scheduleTarget) {
  const regexDay = /[A-Z].*y/g;
  const regexAnimal = /^[a-z].*[s]$/g;

  switch (true) {
  case scheduleTarget === 'Monday':
    return { [scheduleTarget]: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
  case regexDay.test(scheduleTarget):
    return { [scheduleTarget]: { officeHour: officeHour(scheduleTarget),
      exhibition: exhibition(scheduleTarget) } };
  case regexAnimal.test(scheduleTarget):
    return animals(scheduleTarget);
  default:
    return fullSchedule();
  }
}

module.exports = getSchedule;
