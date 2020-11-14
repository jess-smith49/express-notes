const fs = require("fs");
const path = require("path");
const notesArray = require('./db/db.json');



//reading the api
const getNotes = ()=>{
    let output =
    fs.readFileSync(__dirname + '/db/db.json', 'utf8') 
    return output;
    
};

//adding new notes
function newNote (body){
  const newNotes = body;
  console.log(notesArray);
  notesArray.push(newNotes);
    fs.writeFileSync(
        (__dirname + '/db/db.json'),
        //converts to a string
        JSON.stringify(notesArray)
      );
  return newNotes;

}


const deleteNote = () => {
  
}

module.exports = {getNotes, newNote};