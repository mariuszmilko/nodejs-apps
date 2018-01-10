const path = require('path');
const os = require('os');

const _ = require('lodash');
const yargs = require('yargs');

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
      const message = c.action(_Notes.Notes, {title: argv.title, body: argv.body});

      console.log('Wynik:', message);
