
function Map()
{

}

Map.prototype.getAddress = function(repository, parameters) {

    return new Promise((resolve, reject) => {
        repository.getAddress(parameters, (model, error) => {
          
            if (model === undefined )  return reject(new Error(error.error));

            model.getAddress( (result) => {
                    resolve({result: result.row.details});
            });    
        })
    });   
}

Map.prototype.getWheather = function(repository, parameters) {

    return new Promise((resolve, reject) => {
        repository.getWheather(parameters, (model, error) => {

            if (model === undefined )  return reject(new Error(error.error));

            model.getWheather( (result) => {
                resolve({result: result.row.wheather});
            });        
        })
    });
}


module.exports = {
   Map
}