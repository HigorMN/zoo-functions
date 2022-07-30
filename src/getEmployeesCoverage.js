const data = require('../data/zoo_data');

const { employees, species } = data;

function getName(objeto) {
  const { name } = objeto;
  if (typeof name !== 'undefined') {
    const filterName = employees.filter((e) => e.firstName === name || e.lastName === name);
    const findName = employees.find((e) => e.firstName === name || e.lastName === name);
    return filterName.reduce((acc, curr) => {
      acc.id = curr.id;
      acc.fullName = `${findName.firstName} ${findName.lastName}`;
      acc.species = findName.responsibleFor.reduce((acc2, curr2) => {
        acc2.push(species.find((espe) => espe.id === curr2).name);
        return acc2;
      }, []);
      acc.locations = findName.responsibleFor.reduce((acc3, curr3) => {
        acc3.push(species.find((espe) => espe.id === curr3).location);
        return acc3;
      }, []);
      return acc;
    }, {});
  }
}

function getID(objeto) {
  const { id } = objeto;
  if (typeof id !== 'undefined') {
    const filterID = employees.filter((e) => e.id === id);
    const findName = employees.find((e) => e.id === id);
    return filterID.reduce((acc, corrent) => {
      acc.id = corrent.id;
      acc.fullName = `${findName.firstName} ${findName.lastName}`;
      acc.species = findName.responsibleFor.reduce((acc2, curr2) => {
        acc2.push(species.find((espe) => espe.id === curr2).name);
        return acc2;
      }, []);
      acc.locations = findName.responsibleFor.reduce((acc3, curr3) => {
        acc3.push(species.find((espe) => espe.id === curr3).location);
        return acc3;
      }, []);
      return acc;
    }, {});
  }
}

function getAll() {
  return employees.reduce((acc, corrent) => {
    if (!acc.sdafg) {
      const sim = {
        id: corrent.id,
        fullName: `${corrent.firstName} ${corrent.lastName}`,
        species: corrent.responsibleFor.reduce((acc2, curr2) => {
          acc2.push(species.find((espe) => espe.id === curr2).name);
          return acc2;
        }, []),
        locations: corrent.responsibleFor.reduce((acc3, curr3) => {
          acc3.push(species.find((espe) => espe.id === curr3).location);
          return acc3;
        }, []),
      };
      acc.push(sim);
    }
    return acc;
  }, []);
}

function getEmployeesCoverage(objeto) {

  if (typeof objeto !== 'undefined') {
    const { name, id } = objeto;
    const iD = getID(objeto)
    const names = getName(objeto)
    if (typeof name !== 'undefined') {
      return names;
    }
    if(JSON.stringify(names) === '{}' || JSON.stringify(iD) === '{}'){
      throw  new  Error('Informações inválidas');
    }
    if (typeof id !== 'undefined') {
      return iD;
    }
  }
  return getAll();
}
console.log(getEmployeesCoverage({ id: 'c1f50212-35a6-4ecd-8223-f835538526c2' }));

module.exports = getEmployeesCoverage;
