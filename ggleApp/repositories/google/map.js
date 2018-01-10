const path = require('path');
const _Model = require(path.relative(__dirname, 'models/google/map.js'));
const rp = require('request-promise');


function Map() {

}

Map.prototype.getAddress = function (parameters, result) {
     
    rp(`${parameters.adress}${parameters.args}`)
    .then(function (htmlString) {
        // Process html...
        const map = new _Model.Map('OK MODEL DETAILS');

        result(map, {error: undefined});  
    })
    .catch(function (err) {
        // Crawling failed...
        result(undefined, {error: 'error'});
    });  
}

Map.prototype.getWheather = function (parameters, result) {
     
    rp(`${parameters.adress}${parameters.args}`)
    .then(function (htmlString) {
        // Process html...
        const map = new _Model.Map('OK MODEL DETAILS');

        result(map, {error: undefined});       
    })
    .catch(function (err) {
        // Crawling failed...
        result(undefined, {error: 'error'});
    });  
}


module.exports = {
    Map
 }