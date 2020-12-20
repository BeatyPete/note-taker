const router = require('express').Router();
const {
  createNote,
  deleteNote
} = require('../../lib/notes');
const notes = require('../../db/notes'); 

router.get('/notes', (req, res) => {
  res.json(notes)
});

router.post('/notes', (req, res) => {
  console.log(req.body);
  const note = createNote(req.body, notes);
  res.json(note);
});

router.delete('/notes/:id', (req, res) => {
  const newList = deleteNote(req.params.id, notes);
  res.json(newList);
});

module.exports = router;