console.log('google-app');
const request = require('request');


request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=Potokowa%2026%20Wroclaw',
    json: true
}, (error, response, body) => {
    console.log(JSON.stringify(body, undefined, 2));
});

var getUser = (id, callback) => {
    var User = {
        id : id,
        name: 'Testowy User'
    }

    let myFirstPromise = new Promise((resolve, reject) => {
        // do something asynchronous which eventually calls either:
        //
        //   resolve(someValue); // fulfilled
        // or
        //   reject("failure reason"); // rejected
        setTimeout ( () => {
            callback(User);
            resolve('SUCCESS!!');
        }, 5000);

      });

      myFirstPromise .then(
        // Log the fulfillment value
        function(val) {
          console.log(val);
        })
    .catch(
        // Log the rejection reason
       (reason) => {
            console.log('Handle rejected promise ('+reason+') here.');
        });
};


getUser(1, (User) => {

    console.log(User);
});

console.log('continue');