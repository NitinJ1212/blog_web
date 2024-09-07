const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const loginuserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    domainName: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
  
    phone: { type: Number, required: true },
  
    address: {
        towen: {
            type: String, required: false
        },
        city: {
            type: String, required: false
        },
        pincode: {
            type: String, required: false
        },
        tokens: [{
            token: {
                type: String,
                required: true
            }
        }],
        seccretKey:{
            type: String,
                required: true
        },
        clintId:{
            type: String,
            required: true 
        },
        seccusessUrl:{
            type: String,
            required: true  
        }
        
    }
});

// Hash password before saving
// userSchema.pre('save', async function (next) {
//     const user = this;
//     if (user.isModified('password')) {
//         user.password = await bcrypt.hash(user.password, 10);
//     }
//     next();
// });

// Generate auth token
loginuserSchema.methods.generateAuthToken = async function () {
    const user = this;
    const token = jwt.sign({ _id: user._id.toString() }, 'nitinjangid');
    user.tokens = user?.tokens?.concat({ token });
    await user.save();
    return token;
};

const LoginUser = mongoose.model('LoginUser', loginuserSchema);

module.exports = LoginUser;