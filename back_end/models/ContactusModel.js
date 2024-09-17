const mongoose = require('mongoose');

// Define the category schema
const contacctusSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }, email: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                // Regular expression for basic email validation
                return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
            },
            message: props => `${props.value} is not a valid email address!`
        }
    }, description: {
        type: String,
        required: true,
    }, phone: {
        type: Number,
        required: true,
        validate: {
            validator: function (v) {
                // Check if phone number does not start with digits 0 to 5 and is a valid number
                return /^[6-9]\d{9}$/.test(v); // Example for 10-digit phone number validation where first digit is 6-9
            },
            message: props => `${props.value} is not a valid phone number!`
        }
    },
});

// Create the model from the schema
const Contactus = mongoose.model('Contactus', contacctusSchema);

module.exports = { Contactus };
