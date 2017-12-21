const http = require('http');
const path = require('path');
const os = require('os');

const _ = require('lodash');
const yargs = require('yargs');
const express = require('express');
const expressHandlebars = require('express-handlebars');

const _Notes = require('./modules/notes/module-start.js');
const _Commander = require('./modules/commander/module-start.js');

const titleOptions = {
    describe: '',
    demand: '',
    alias: ''
};

const argv = yargs
      .command('add', 
               'add new note', {
                   title: titleOptions,
                   body:{
                       describe: '',
                       demand: '',
                       alias: '' 
                   }
            })
      .help()
      .argv;
    
const c = new _Commander.Commander(argv.command);

const res = c.action(_Notes.Notes, {title: argv.title, body: argv.body});


PORT = 8000;

var LINES = [
    "74.Hey, now, you're an All Star, get your game on, go play",
    "Hey, now, you're a Rock Star, get the show on, get paid",
    "And all that glitters is gold",
    "Only shooting stars break the mold",
];

var lineIndex = 0;
console.log("dir is %s", path.join(__dirname, '/public/'));
var app = express();
app.engine('html', expressHandlebars());
app.set('view engine', 'html');
app.set('views', path.join(__dirname, '/public/'));
app.get('/', function(req, res) {
    var message = LINES[lineIndex];

    lineIndex += 1;
    if (lineIndex >= LINES.length) {
        lineIndex = 0;
    }

    res.render('index', {message: message});
});

http.Server(app).listen(PORT, function() {
    console.log("HTTP server listening on port %s", PORT);
});
