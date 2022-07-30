const data = require('../data/zoo_data');

const { species, hours } = data;
const days = Object.keys(hours);
const hour = Object.values(hours);
const createObjeto = (scheduleTarget) => {
  const daysWeek = days.reduce((acc, crr, i) => {
    acc[crr] = {
      officeHour: `Open from ${hour[i].open}am until ${hour[i].close}pm`,
      exhibition: species
        .filter((elemento) =>
          elemento.availability.find((elem) => elem === crr))
        .map((elemento) => elemento.name),
    };
    return acc;
  }, {});
  daysWeek.Monday = {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  };
  return daysWeek;
};

const findDay = (scheduleTarget) => {
  const daysWeek = days.reduce((acc, crr, i) => {
    if (scheduleTarget === 'Monday') {
      const monday = createObjeto();
      return { Monday: monday.Monday };
    }
    if (scheduleTarget === crr) {
      acc[crr] = {
        officeHour: `Open from ${hour[i].open}am until ${hour[i].close}pm`,
        exhibition: species
          .filter((elemento) =>
            elemento.availability.find((elem) => elem === crr))
          .map((elemento) => elemento.name),
      };
    }
    return acc;
  }, {});
  return daysWeek;
};

function getSchedule(scheduleTarget) {
  const Animals = species.find((e) => e.name === scheduleTarget);
  if (
    scheduleTarget === days.find((e) => e === scheduleTarget)
    && typeof scheduleTarget !== 'undefined'
  ) {
    return findDay(scheduleTarget);
  }
  if (typeof scheduleTarget === 'undefined' || typeof Animals === 'undefined') {
    return createObjeto();
  }
  const animal = Animals.availability;
  return animal;
}

module.exports = getSchedule;
