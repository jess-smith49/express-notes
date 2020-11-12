const router = require ('express').Router();
const fs = require('fs');
const notesRouts = require('../apiRoutes/index');
const {getNotes} = require('../../lib/notes');

//declare notes variable
router.get('/notes', (req, res)=>{
    console.log("hello");
    const results = getNotes();
    if(results){
        res.json(results);
    }
    else{
        res.sendStatus(404);
    }
})


module.exports = router;