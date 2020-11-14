const express = require('express');
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Getting API and HTML routes
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

//the port being declared//process.env to ensure variable ports can listen
const PORT = process.env.PORT || 3001
//object traditionally named app


//parsing json and url data


//middleware 
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


//serves static files, can load files in public folder
app.use(express.static('public'));



//server listening 
app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
})



