const data = require('../data/zoo_data');

const { species } = data;
const days = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
function getSchedule(scheduleTarget) {
  if (!scheduleTarget) {
    return days.reduce((acc, curr) => {
      if (!acc[curr]) {
        acc[curr] = {};
      }
      return acc;
    }, {});
  }
  const findAnimal = species.find(
    (elemento) => elemento.name === scheduleTarget,
  );
  return findAnimal.availability;
}

console.log(getSchedule());

module.exports = getSchedule;
