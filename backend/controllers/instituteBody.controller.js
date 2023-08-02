const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const dbModels = require("../utils/setupSchemas");
const ResponseClass = require("../utils/ResponseClass");
const {instituteBody} = require("../utils/setupSchemas");

const register = async (req, res) => {
    const resObj = new ResponseClass();
    try{
        const {name, email, description, password} = req.body;

        const existingLogin = await instituteBody.findOne({email});

        if(existingLogin){
            resObj.error = false;
            resObj.message = "User login already exists.";
            resObj.statusCode = 200;

            res.status(resObj.statusCode).json(resObj);
        }
        else{
            const randomSalt = bcrypt.genSaltSync();
            const passwordHash = bcrypt.hashSync(password, randomSalt);

            const newInstituteBody = await instituteBody.create({
                name: name,
                email: email,
                description: description,
                passwordHash: passwordHash,
            });

            resObj.error = false;
            resObj.message = "New institute body registered.";
            resObj.statusCode = 201;

            res.status(resObj.statusCode).json(resObj);
        }
    } catch (e) {
        console.error(e);

        resObj.error = true;
        resObj.message = "Server error occurred, please try again later";
        resObj.statusCode = 500;

        res.status(resObj.statusCode).json(resObj);
    }
}

const login = async (req, res) => {
    const resObj = new ResponseClass();

    try {
        const {email, password} = req.body;

        const existingUser = await instituteBody.findOne({email});

        if(existingUser){
            const auth = await bcrypt.compareSync(password, existingUser.passwordHash);

            if (auth) {
                resObj.error = false;
                resObj.statusCode = 200;
                resObj.message = "User logged in successfully";

                const token = jwt.sign({userId: existingUser._id}, process.env.TOKEN_KEY);

                resObj.data = token;

                res.status(resObj.statusCode).json(resObj);
            } else {
                resObj.error = false;
                resObj.statusCode = 403;
                resObj.message = "User credentials are invalid";

                res.status(resObj.statusCode).json(resObj);
            }
        } else {
            resObj.error = false;
            resObj.statusCode = 403;
            resObj.message = "User credentials are invalid";

            res.status(resObj.statusCode).json(resObj);
        }
    } catch (e) {
        console.error(e);

        resObj.error = true;
        resObj.message = "Server error occurred, please try again later";
        resObj.statusCode = 500;

        res.status(resObj.statusCode).json(resObj);
    }
}
const get = async (req, res) => {

}

module.exports = {
    register,
    login,
    get,
}