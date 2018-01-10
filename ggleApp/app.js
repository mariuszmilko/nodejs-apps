const http = require('http');
const path = require('path');
const os = require('os');

const _ = require('lodash');
const yargs = require('yargs');
const express = require('express');
const expressHandlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const async = require('async');
const i18n = require("i18n");


const _Controller = require(path.join(__dirname, '/controllers/google/map.js'));


i18n.configure({
    locales:['en', 'pl'],
    directory: __dirname + '/locales',
    register: global
});

i18n.setLocale('pl');


// var getUser = (id, callback) => {
//     var User = {
//         id : id,
//         name: 'Testowy User'
//     }
////////////////////////////////////////////////////////////////////////////////////////////////////
//     let myFirstPromise = new Promise((resolve, reject) => {
//         // do something asynchronous which eventually calls either:
//         //
//         //   resolve(someValue); // fulfilled
//         // or
//         //   reject("failure reason"); // rejected
//         setTimeout ( () => {
//             callback(User);
//             resolve('SUCCESS!!');
//         }, 5000);

//       });

//       myFirstPromise .then(
//         // Log the fulfillment value
//         function(val) {
//           console.log(val);
//         },
//         function(reject){

//       }).catch(
//         // Log the rejection reason
//        (reason) => {
//             console.log('Handle rejected promise ('+reason+') here.');
//         });
// };
////

// getUser(1, (User) => {

//     console.log(User);
// });

// console.log('continue');


PORT = 8000;

const app = express();
app.engine('html', expressHandlebars());
app.set('view engine', 'html');
app.set('views', path.join(__dirname, '/public/'));
//app.use(express.static(path.join(__dirname, '/public/')));
app.use(i18n.init);


app.get('/', new _Controller.Map().getWheatherOnAddress);
// app.get('/', function(req, res) {
 //////////////////////////////////////test 
//    // encodeURIComponent(req);
//    // decodeURIComponent(req);
//     const _param = decodeURIComponent(url.parse(req.url, true).query.address);
//     const message = _param;
//    request({
//     url: `https://maps.googleapis.com/maps/api/geocode/json?address=${_param}`,
//     json: true
//     }, (error, response, body) => {
//         console.log(`address: ${JSON.stringify(body.results[0].formatted_address)}`);
//         console.log(`lattitude: ${JSON.stringify(body.results[0].geometry.location.lat)}`);
//         console.log(`longfitude: ${JSON.stringify(body.results[0].geometry.location.lng)}`);
//     });
    
//     res.render('index', {message: message});
// });

http.Server(app).listen(PORT, function() {
    console.log("8.HTTP server listening on port %s", PORT);
});