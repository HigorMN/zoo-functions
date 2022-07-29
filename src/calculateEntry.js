const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter((elemento) => elemento.age < 18);
  const adult = entrants.filter(
    (elemento) => elemento.age >= 18 && elemento.age < 50,
  );
  const senior = entrants.filter((elemento) => elemento.age >= 50);
  const obj = entrants.reduce((acc, curr) => {
    if (!acc[curr.child]) {
      acc.child = child.length;
    }
    if (!acc[curr.adult]) {
      acc.adult = adult.length;
    }
    if (!acc[curr.senior]) {
      acc.senior = senior.length;
    }
    return acc;
  }, {});
  return obj;
}

function calculateEntry(entrants) {
  if (typeof entrants === 'undefined' || Object.keys(entrants).length === 0) {
    return 0;
  }
  const fun = countEntrants(entrants);
  const child = fun.child * 20.99;
  const adult = fun.adult * 49.99;
  const senior = fun.senior * 24.99;

  return child + adult + senior;
}

module.exports = { calculateEntry, countEntrants };
