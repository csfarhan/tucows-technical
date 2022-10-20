const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    favFood: {
        type: String,
        required: true,
    }
});

module.exports = User = mongoose.model('user', UserSchema);