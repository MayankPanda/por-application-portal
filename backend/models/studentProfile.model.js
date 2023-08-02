const mongoose = require("../utils/dbConnSetup");
const {Schema} = require("mongoose");
const validator = require("validator");

const studentProfileSchema = new Schema({
    name: {
        type: String,
        required: [true, "Student name required."]
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: [true, "Email address is required."],
        validate: [validator.isEmail, "Invalid Email Address."],
    },
    passwordHash: {
        type: String,
        required: [true, "Password is required"],
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
}, {
    strict: false,
});

module.exports = studentProfileSchema;