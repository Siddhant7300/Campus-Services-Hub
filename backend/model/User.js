const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    regno : {
        type: String
    },
    branch : {
        type: String
    },
    mobile : {
        type: Number
    },
    course : {
        type: String
    },
    age : {
        type: Number
    },
    gender : {
        type: String
    },
    living : {
        type: String
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
},{timestamps:true});

module.exports = mongoose.model("campususer", userSchema);
