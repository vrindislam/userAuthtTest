const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please tell us your name']
    },
    email: {
        type: String,
        required: [true, 'Please provide us with your email'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide us with a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please enter your password'],
        minlength: 8
    },
    passwordConfirm: {
        type: String,
        required: [true, 'Please confirm your password'],
    }
})

const User = mongoose.model('User', userSchema);

module.exports = User;