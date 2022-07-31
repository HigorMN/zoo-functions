const data = require('../data/zoo_data');

const { species } = data;

const noParameter = () => {
  const objetc = species.reduce((acc, curr) => {
    if (!acc[curr.location]) {
      acc[curr.location] = species
        .filter((e) => curr.location === e.location)
        .map((n) => n.name);
    }
    return acc;
  }, {});
  return objetc;
};

const objetcParameter = (options) =>
  species.reduce((acc, curr) => {
    if (!acc[curr.location]) {
      const animalsName = species
        .filter((e) => curr.location === e.location)
        .reduce((a, c) => {
          a.push({ [c.name]: c.residents.map((n) => n.name) });
          return a;
        }, []);
      acc[curr.location] = animalsName;
    }
    return acc;
  }, {});

const objetcParameterSorted = (options) => {
  const { sorted, includeNames } = options;
  if (includeNames === true && sorted === true) {
    return species.reduce((acc, curr) => {
      if (!acc[curr.location]) {
        const animalsName = species
          .filter((e) => curr.location === e.location)
          .reduce((a, c) => {
            a.push({ [c.name]: c.residents.map((n) => n.name).sort() });
            return a;
          }, []);
        acc[curr.location] = animalsName;
      }
      return acc;
    }, {});
  }
  return objetcParameter();
};

const objetcFemale = () =>
  species.reduce((acc, curr) => {
    if (!acc[curr.location]) {
      const animalsName = species
        .filter((e) => curr.location === e.location)
        .reduce((a, c) => {
          a.push({
            [c.name]: c.residents
              .filter((n) => n.sex === 'female')
              .map((na) => na.name),
          });
          return a;
        }, []);
      acc[curr.location] = animalsName;
    }
    return acc;
  }, {});

const objetcFemaleSorted = () =>
  species.reduce((acc, curr) => {
    if (!acc[curr.location]) {
      const animalsName = species
        .filter((e) => curr.location === e.location)
        .reduce((a, c) => {
          a.push({
            [c.name]: c.residents
              .filter((n) => n.sex === 'female')
              .map((na) => na.name)
              .sort(),
          });
          return a;
        }, []);
      acc[curr.location] = animalsName;
    }
    return acc;
  }, {});

const objetcSex = (options) => {
  const { sex, includeNames, sorted } = options;
  if (sex === 'female' && includeNames === true) {
    if (sorted === true) {
      return objetcFemaleSorted();
    }
    return objetcFemale();
  }
  return objetcParameterSorted(options);
};

function getAnimalMap(options) {
  if (typeof options !== 'undefined') {
    const { includeNames } = options;
    if (includeNames === true) {
      return objetcSex(options);
    }
  }
  return noParameter();
}

module.exports = getAnimalMap;
