
function Map(row) {
  this.id = row.id;  
  this.details = row.details,
  this.wheather = row.wheather
}

Map.prototype.getAddress = function (result) {

    console.log(`row_met:${this.details}`);
    result( {row: 
                {
                    id: this.id,
                    details: this.details
                }
    
    });
}

Map.prototype.getWheather = function (result) {

    console.log(`row_met:${this.details}`);
    result( {row: 
                {
                    id: this.id,
                    details: this.details,
                    wheather: this.wheather
                }
    
    });
}

module.exports = {
    Map
}