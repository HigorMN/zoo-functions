const data = require('../data/zoo_data');

const { species } = data;
function getSpeciesByIds(...ids) {
  return species.filter((elemento) =>
    ids.find((parameto) => parameto === elemento.id));
}

module.exports = getSpeciesByIds;
