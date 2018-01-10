const path = require('path');
const request = require('request');
const rp = require('request-promise');
const url = require('url');

const _Service = require(path.relative(__dirname, 'services/google/map.js'));
const _Repository = require(path.relative(__dirname, 'repositories/google/map.js'));

function Map() {
    
}

Map.prototype.getWheatherOnAddress = function(req, res) { 

    const service =  new _Service.Map();
    const repository = new _Repository.Map();
    const address = decodeURIComponent(url.parse(req.url, true).query.address);
    const param = decodeURIComponent(url.parse(req.url, true).query.param);
    const args = {address: address, 
                  args: param
    };

    service.getAddress(repository, args).then( (val) => {
        let args = val;

        return service.getWheather(repository, args);
    }).then( (val) => {

        res.render("index", {message: val});
    }).catch((reason) => {
        res.render("index", {message: reason});
    }) ;  
};

module.exports = {
    Map
}
