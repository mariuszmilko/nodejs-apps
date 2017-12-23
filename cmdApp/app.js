const http = require('http');
const path = require('path');
const os = require('os');

const _ = require('lodash');
const yargs = require('yargs');
const express = require('express');
const expressHandlebars = require('express-handlebars');
const bodyParser = require('body-parser');

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
    
PORT = 8000;

const app = express();
app.engine('html', expressHandlebars());
app.set('view engine', 'html');
app.set('views', path.join(__dirname, '/public/'));
app.get('/', function(req, res) {
  
    const c = new _Commander.Commander(argv.command);
    const message = c.action(_Notes.Notes, {title: argv.title, body: argv.body});

    res.render('index', {message: message});
});

http.Server(app).listen(PORT, function() {
    console.log("5.HTTP server listening on port %s", PORT);
});
