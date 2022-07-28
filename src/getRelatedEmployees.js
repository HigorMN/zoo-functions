const data = require('../data/zoo_data');

const { employees } = data;
function isManager(id) {
  const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
  const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
  const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
  const managerIds = [stephanieId, olaId, burlId];
  const idsManager = managerIds.find((elemento) => elemento === id);
  return employees.some((elemeto) => elemeto.id === id && id === idsManager);
}

function getRelatedEmployees(managerId) {
  const manager = isManager(managerId);
  const idColabo = employees.filter((elemento) =>
    elemento.managers.find((ele) => ele === managerId));
  const nomes = idColabo.reduce((acc, curr) => {
    acc.push(`${curr.firstName} ${curr.lastName}`);
    return acc;
  }, []);
  if (manager === true) {
    return nomes;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));
module.exports = { isManager, getRelatedEmployees };
