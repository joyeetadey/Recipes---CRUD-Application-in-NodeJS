require('./models/db');

const express = require('express');
const recipeController = require('./controllers/recipeController');

var app = express();

app.listen(3000, () => {
    console.log('Express server started at port: 3000');
});

app.use('/recipe', recipeController);