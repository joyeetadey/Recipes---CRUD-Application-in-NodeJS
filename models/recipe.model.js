const mongoose  = require('mongoose');

var recipeSchema = new mongoose.Schema({
    title: {
        type: String
    },
    category: {
        type: String
    },
    ingredients: {
        type: String
    },
    instructions: {
        type: String
    },
    notes: {
        type: String
    }
});

mongoose.model('Recipe', recipeSchema);