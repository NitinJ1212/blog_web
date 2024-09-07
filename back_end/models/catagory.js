const mongoose = require('mongoose');

// Define the category schema
const categorySchema = new mongoose.Schema({
    catagory: {
        type: String,
        required: true,
    },
});

// Create the model from the schema
const Category = mongoose.model('Category', categorySchema);

module.exports = { Category };
