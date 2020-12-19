const fs = require('fs');
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
}

module.exports = {
    createNote
  };