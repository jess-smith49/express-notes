const fs = require('fs');
const path = require('path');
const express = require('express');

//Getting API and HTML routes
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

//the port being declared
const PORT = process.env.PORT || 3001
//object traditionally named app
const app = express();

//parsing data
app.use(exprress.urlencoded({extended: true}));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
app.use(express.json());

app.use(express.static('public'));



//listening
app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
})

