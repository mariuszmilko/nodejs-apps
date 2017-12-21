
const path = require('path');
const fs = require('fs');

const _ = require('lodash');

DIRFILE = '/assets/tests.txt'; 

//closures private getset
function Notes(title, body) {
  var _title = title,
      _body = body,
      _notes = [];

  var _ = {
    title: _title,
    body: _body,
    notes: _notes
  };

  _.noteDetails = () => {
    return _title + ' ' + _body;
  };

  // Getter/setters
  _.title = (value) => {
    if (!arguments.length) return _title;
    _title = value;

    return _;
  };

  _.body = (value) => {
    if (!arguments.length) return _body;
    _body = value;

    return _;
  };

  _.add = () => {
    var originalNote = {
         title:_title,
         body:_body
    };
    try {
      _notes = _.read();
      var duplicates = _notes.filter((note) => note.title === _title);

      if (duplicates.length === 0) {
        _notes.push(originalNote);
      }
    } catch (e) {

      return false;
    }

    return true;
  }

  _.save = () => {
    try {
        fs.writeFileSync(path.join(__dirname, DIRFILE), JSON.stringify(_notes));
    } catch (e) {
      return false;
    }

    return true;
  }

  _.read = () => {
    try {
      if (_notes.length == 0) {
        var noteString = fs.readFileSync(path.join(__dirname, DIRFILE));
        var notes = JSON.parse(noteString);
        return notes;
      } else {
        return _notes;
      }
    } catch (e) {

      return _notes;
    }
  }

  _.delete = (title) => {
    try {
      _notes = _.read();
      var __notes = _notes.filter((note) => note.title !== title);

      if (_notes.length === __notes.length)
        return false;

      _notes = __notes;
      _.save();

    } catch (e) {
      return false;
    }

    return true;
  }

  _.list = () => {

    return _.read();
  }

   return _;
 }


 module.exports = {
   Notes
 };
