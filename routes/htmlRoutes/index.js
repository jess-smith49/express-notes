const path = require('path');
const router = require('express').Router();




//url browser requesting
router.get('/notes', (req, res) =>{
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});


//homepage route//any route//DEFAULT ROUTE
router.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});


//getting notes and stuff

module.exports = router;