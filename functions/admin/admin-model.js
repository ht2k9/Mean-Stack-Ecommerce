const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMangoose = require("passport-local-mongoose");

const userSchema = new Schema({
    username: String,
    password: String
});

userSchema.plugin(passportLocalMangoose);

const User = mongoose.model('User', userSchema);

module.exports = User;