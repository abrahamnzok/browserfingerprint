const _ = require('lodash');
const rc = require('randomcolor');

getKeys = (results) => {
    return results.map(object => object.key);
};

getCollisions = (result) => {
    return result.map(object => object.collisions);
};

getVisits = (result) => {
    return result.map(object => object.visits);
};

getDatasets = (results) => {
    return  {
        labels : getKeys(results),
        datasets : [
            {
                label: 'Number of collisions',
                data: getCollisions(results),
                borderWidth: 1
            },
            {
                label: 'Number of visits',
                data: getVisits(results),
                borderWidth: 1
            },
        ]
    }
};

getOptions = (results) => {
    return {
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    reverse: false
                }
            }]
        }
    }
};

module.exports = {
  getDatasets : getDatasets,
  getOptions : getOptions
};

