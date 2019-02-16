const _ = require('lodash');
const rc = require('randomcolor');

getKeys = (results) => {
    return results.filter((object) => object.key);
};

getCollisions = (result) => {
    return result.filter((object) => object.collisions);
};

getVisits = (result) => {
    return result.filter((object) => object.visits);
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

