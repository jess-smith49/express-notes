const fs = require("fs");
const path = require("path");

//reading the api
const getNotes = ()=>{
    
    fs.readFile('express-notes/db/db.json', "utf8", (err, data)=>{
      console.log(data);  
    return data;
    
    })
}


module.exports = {getNotes};