// const mongoose = require("mongoose")


// const { Schema } = mongoose;

// const userSchema = new Schema({
//     username: { type: String, required: true },
//     email: { type: String, required: true },
//     age: { type: Number, required: false },
//     phone: { type: Number, required: true },
//     qualification: { type: String, required: false },
//     address: {
//         village: {
//             type: String, required: false
//         },
//         city: {
//             type: String, required: false
//         },
//         pincode: {
//             type: String, required: false
//         },
//     }
// });

// const user = mongoose.model("User", userSchema)

// module.exports = user



const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true,

    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "user"
    },

    tokens: [{
        token: {
            type: String,
            required: true
        }
    }],


});

// Hash password before saving
userSchema.pre('save', async function (next) {
    const user = this;
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 10);
    }
    next();
});

// Generate auth token
userSchema.methods.generateAuthToken = async function () {
    const user = this;
    const token = jwt.sign({ _id: user._id.toString() }, 'nitinjangid');
    user.tokens = user?.tokens?.concat({ token });
    await user.save();
    return token;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
