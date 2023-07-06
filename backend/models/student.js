const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const studentSchema = new mongoose.Schema({
    email:{
        type: String,
        require: [true, "Email ID is Required"],
        unique: true,
    },
    username:{
        type: String,
        required: [true, "Username is Required"],
        unique: [true, "Username should be unique"],
    },
    password:{
        type: String,
        required: [true, "Password is required"],
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

studentSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 12);
});

module.exports = mongoose.model("student", studentSchema);