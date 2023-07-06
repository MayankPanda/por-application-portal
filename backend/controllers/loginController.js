const bcrypt = require("bcrypt");
const {createSecretToken} = require('../utils/SecretToken');
const student = require("../models/student");

async function signUp(req, res, next) {
    try {
        const {email, password, username} = req.body;
        const existingStudent = await student.findOne({email});

        if(existingStudent){
            return res.status(401).json({message: 'User already exists.'});
        }

        const currentStudent = await student.create({email, password, username});
        const token = createSecretToken(currentStudent._id);
        res.cookie("token", token, {
            withCredentials: true,
            httpOnly: false,
        });
        return res
            .status(201)
            .json({message: "User is signed in successfully", success: true, currentStudent} );

    }catch(e){
        return res
            .status(500)
            .json({message: "Server Error"})
    }
}

module.exports.signUp = signUp;

async function login(req, res, next){
    try{
        const {email, password} = req.body;

        if(!email||!password){
            return res.json({message: "All fields are required"});
        }

        const currentStudent = await student.findOne({email});
        if(!currentStudent){
            return res.json({message: "Incorrect password or email"});
        }

        const auth = await bcrypt.compare(password, currentStudent.password);
        if(!auth){
            return res.json({message:"Incorrect password or email"});
        }

        const token = createSecretToken(currentStudent._id);
        res.cookie("token", token, {
            withCredentials: true,
            httpOnly: true,
        });
        res.status(201).json({message: "User logged in successfully"});
        next();
    }catch(error){
        console.error(error);
    }
}

module.exports.login = login;