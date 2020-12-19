const router = require('express').Router();
const {createNote} = require('../../lib/notes');
const notes = require('../../db/notes'); 

router.get('/notes', (req, res) => {
  res.json(notes)
});

router.post('/notes', (req, res) => {
  console.log(req.body);
  const note = createNote(req.body, notes);
  res.json(note);
});

module.exports = router;