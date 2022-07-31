const data = require('../data/zoo_data');

const { species } = data;

const noParameter = () => {
  const objetc = species.reduce((acc, curr) => {
    if (!acc[curr.location]) {
      acc[curr.location] = species.filter((e) => curr.location === e.location).map((n) => n.name);
    }
    return acc;
  }, {});
  return objetc;
};

const objetcParameter = (options) => {
  const objetc = species.reduce((acc, curr) => {
    if (!acc[curr.location]) {
      const animalsName = species.filter((e) => curr.location === e.location).reduce((a, c) => {
        a.push({ [c.name]: c.residents.map((n) => n.name) });
        return a;
      }, []);
      acc[curr.location] = animalsName;
    }
    return acc;
  }, {});
  return objetc;
};

function getAnimalMap(options) {
  if (typeof options !== 'undefined') {
    const { includeNames, sorted } = options;
    if (includeNames === true) {
      return objetcParameter();
    }
    if (sorted === true) {
      return true;
    }
  }
  return noParameter();
}

module.exports = getAnimalMap;
