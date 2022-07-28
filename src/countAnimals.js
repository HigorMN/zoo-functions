const data = require('../data/zoo_data');

const { species } = data;
const organized = species.sort((a, b) => (a.name > b.name ? 1 : -1));
function countAnimals(animal) {
  if (typeof animal !== 'undefined') {
    const { specie, sex } = animal;
    const findSpecie = organized.find((element) => element.name === specie);
    if (typeof sex !== 'undefined') {
      const findSex = findSpecie.residents.filter((element) => element.sex === sex);
      return findSex.length;
    }
    return findSpecie.residents.length;
  }
  const count = {};
  organized.forEach((element) => {
    count[element.name] = element.residents.length;
  });
  return count;
}

module.exports = countAnimals;
