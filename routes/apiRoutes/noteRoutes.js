const router = require('express').Router();
const {
  createNote,
  deleteNote
} = require('../../lib/notes');
const notes = require('../../db/notes.json'); 

router.get('/notes', (req, res) => {
  console.log(notes)
  res.json(notes)
});

router.post('/notes', (req, res) => {
  const note = createNote(req.body, notes);
  res.json(note);
});

router.delete('/notes/:id', (req, res) => {
  const newList = deleteNote(req.params.id, notes);
  res.json(newList);
});

module.exports = router;