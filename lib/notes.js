const fs = require("fs");
const path = require("path");
const notesArray = require('./db/db.json');
//short id require npm package
const shortid = require('shortid');
console.log(shortid.generate());




//reading the api
const getNotes = ()=>{
    let output =
    fs.readFileSync(__dirname + '/db/db.json', 'utf8') 
    return JSON.parse(output);
    
};

//adding new notes
function newNote (body){
  const newNotes = body;
  newNotes.id = shortid.generate();
  console.log(notesArray);
  notesArray.push(newNotes);
    fs.writeFileSync(
        (__dirname + '/db/db.json'),
        //converts to a string
        JSON.stringify(notesArray)
      );
    
  return newNotes;

}

/*function deleteNote (body){
  const deleteNotes = body;
  console.log(notesArray);

}*/

module.exports = {getNotes, newNote};