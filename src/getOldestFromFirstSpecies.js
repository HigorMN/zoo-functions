const data = require('../data/zoo_data');

const { employees, species } = data;

function getOldestFromFirstSpecies(id) {
  const people = employees.find((e) => e.id === id).responsibleFor;
  const animal = species.find((e) => e.id === people[0]);
  const animalAge = animal.residents.map((e) => e.age);
  const maior = Math.max(...animalAge);
  const animalOld = animal.residents.find((e) => e.age === maior);
  return Object.values(animalOld);
}

module.exports = getOldestFromFirstSpecies;
