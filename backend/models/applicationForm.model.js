const mongoose = require("../utils/dbConnSetup");
const {Schema} = require("mongoose");

const applicationFormSchema = new Schema({
    issuedBy: {
        type: Schema.Types.ObjectId,
        ref: 'instituteBody'
    },
    name: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    deadline: {
        type: Date,
    },
    description: {
        type: String,
    },
    formSequence: {
        type: [{
            index: Number,
            fieldType: String,
        }],
    },
    status: {
        type: String,
    },
    textBoxData: {
        type: [{
            index: Number,
            title: String,
            value: String,
        }],
    },
    multiSelectData: {
        type: [{
            index: Number,
            title: String,
            options: [String],
            Selected: [Number],
        }]
    },
    radioButtonData: {
        type: [{
            index: Number,
            title: String,
            options: [String],
            Selected: Number,
        }],
    },
}, {
    strict: false,
});

module.exports = applicationFormSchema;