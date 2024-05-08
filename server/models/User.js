const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        profileImagePath: {
            type: String,
            default: ''
        },
        reservationList: {
            type: Array,
            default: []
        },
        wishList: {
            type: Array,
            default: []
        },
        postedList: {
            type: Array,
            default: []
        }
    },
    { timestamps: true }
);

const User = mongoose.model('User', UserSchema);
module.exports = User;
