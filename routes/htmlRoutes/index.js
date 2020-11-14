const path = require('path');
const router = require('express').Router();


//url browser requesting
router.get('/notes', (req, res) =>{
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

//deleting notes
/*router.delete('/notes/:id', (req, res) =>{
    const
})*/

//homepage route//any route//DEFAULT ROUTE for index.html PLACED AT BOTTOM
router.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});



//getting notes and stuff

module.exports = router;