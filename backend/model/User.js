const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        default: null,
        required : true,
    },
    email: {
        type: String,
        unique: true,
        required : true,
    },
    password: {
        type: String,
        required : true,
    }
});

module.exports = mongoose.model("taskboarduser", userSchema);