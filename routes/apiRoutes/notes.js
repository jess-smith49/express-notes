const router = require ('express').Router();
const fs = require('fs');
const notesRouts = require('../apiRoutes/index');
const {getNotes, newNote} = require('../../lib/notes');



//getting the notes
router.get('/notes', (req, res)=>{
    console.log("hello");
    const results = getNotes();
    if(results){
        res.json(results);
    }
    else{
        res.sendStatus(404);
    }
});

router.get("/notes/:id", (req, res)=> {
    
})

//adding a new note
router.post('/notes', (req, res) => {
    //setting id for notes//and adding new note to the data
    const newNotes = newNote(req.body);
    console.log(newNotes);
    console.log(req.body);
    res.json(newNotes);
});

module.exports = router;