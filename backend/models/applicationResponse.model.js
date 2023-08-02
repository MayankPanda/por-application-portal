const mongoose = require("../utils/dbConnSetup");
const {Schema} = require("mongoose");

const applicationResponseSchema = new Schema({
    filledBy: {
        type: Schema.Types.ObjectId,
        ref: 'studentProfile'
    },
    formId: {
        type: Schema.Types.ObjectId,
        ref: 'applicationForm'
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
});

module.exports = applicationResponseSchema;