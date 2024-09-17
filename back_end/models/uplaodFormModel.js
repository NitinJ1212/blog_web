const mongoose = require('mongoose');

// Define the category schema
const uplaodformSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true,
    },

}, { timestamps: true },);

// Create the model from the schema
const UploadForm = mongoose.model('UploadForm', uplaodformSchema);

module.exports = UploadForm;
