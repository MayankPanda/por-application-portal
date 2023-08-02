const mongoose = require("../utils/dbConnSetup");

const validator= require("validator");
const {Schema} = require("mongoose");

const instituteBodySchema = new Schema({
    name: {
        type: String,
        required: [true, "Institute body name is required."],
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: [true, "Email address is required."],
        validate: [validator.isEmail, "Invalid Email Address."],
    },
    description: {
        type: String,
    },
    passwordHash: {
        type: String,
        required: [true, "Password is required."],
    },
    createdAt: {
        type: Date,
        default: new Date(),
    }
}, {
    strict: false,
});

module.exports = instituteBodySchema;
