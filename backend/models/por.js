const mongoose = require("mongoose");

const porSchema = new mongoose.Schema({
    issuedBy:{
        type: String,
        require: [true, "Issuer Required"],
    },
    name:{
        type:String,
        require:[true, "POR Name Required"]
    },
    createdAt:{
        type: Date,
        default: new Date()
    },
    startDate:{
        type: Date,
    },
    endDate:{
        type: Date,
    },
    description:{
        type: String
    }
});

module.exports = mongoose.model("por", porSchema);