const fs = require('fs');
const { resolve } = require('path');
const path = require('path');
var uniqid = require('uniqid');

function createNote(body, notes) {
    const note = body;
    note.id = uniqid()
    console.log(notes)
    notes.push(note);
    fs.writeFileSync(
      path.join(__dirname, '../db/notes.json'),
      JSON.stringify(notes, null, 2)
    );
    return note;
};

function deleteNote(id, notes) {
    const thing = notes.filter(note => note.id !== id)
    fs.writeFileSync(
        path.join(__dirname, '../db/notes.json'),
        JSON.stringify(thing, null, 2)
      );
    return thing;

};

module.exports = {
    createNote,
    deleteNote
  };