const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const email = require('../validators/emailValidator.js');

const UserSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: [true, 'Email does already exists'],
        lowercase: true,
        trime: true,
        validate: {
            validator: email.validateEmail,
            message: 'Please fill a valid email address'
        },
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    }
}, { timestamps: {currentTime: () => {
            let d = new Date();
            return d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes();
}}}
)

module.exports = mongoose.model('User', UserSchema);