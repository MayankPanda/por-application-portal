const jwt = require("jsonwebtoken");

const {instituteBody, applicationResponse, applicationForm} = require("../utils/setupSchemas");
const ResponseClass = require("../utils/ResponseClass");

require("dotenv").config();

const saveNewForm = async (req, res) => {
    const resObj = new ResponseClass();
    try {
        const {userIdJwt, formData, formDesc, formName} = req.body;

        const decodedData = jwt.verify(userIdJwt, process.env.TOKEN_KEY);
        const {userId} = decodedData;

        let formSequence = [];
        let textBoxData = [];
        let multiSelectData = [];
        let radioButtonData = [];

        let count = 0;
        formData.forEach((element) => {
            formSequence.push({
                index: count,
                fieldType: element.type,
            })
            if (element.type === "0") {
                textBoxData.push({
                    index: count,
                    title: element.title,
                    value: element.Data.text,
                });
            }
            else if (element.type === "1") {
                radioButtonData.push({
                    index: count,
                    title: element.title,
                    options: element.Data.values,
                });
            }
            else if (element.type === "2") {
                multiSelectData.push({
                    index: count,
                    title: element.title,
                    options: element.Data.values,
                })
            }
            count += 1;
        });

        const newForm = await applicationForm.create({
            issuedBy: userId,
            name: formName,
            description: formDesc,
            formSequence: formSequence,
            textBoxData: textBoxData,
            multiSelectData: multiSelectData,
            radioButtonData: radioButtonData
        });

        resObj.statusCode = 200;
        resObj.message = "New form successfully created.";
        resObj.error = false;
        resObj.data = newForm;

        res.status(resObj.statusCode).json(resObj);
    } catch (e) {
        console.error(e);

        resObj.error = true;
        resObj.message = "Server error occurred, please try again later";
        resObj.statusCode = 500;

        res.status(resObj.statusCode).json(resObj);
    }
}

const getAll = async (req, res) => {
    const resObj = new ResponseClass();
    try {
        const {reqType, userDetails} = req.body;

        if (reqType === "Forms") {
            const allForms = applicationForm.find({});


        }
    } catch (e) {
        console.error(e);

        resObj.error = true;
        resObj.message = "Server error occurred, please try again later";
        resObj.statusCode = 500;

        res.status(resObj.statusCode).json(resObj);
    }

}

const getAllByStudentId = async (req, res) => {

}

const getAllByInstituteBodyId = async (req, res) => {
    const resObj = new ResponseClass();
    try {
        const {userIdJwt} = req.body;

        const decodedData = jwt.verify(userIdJwt, process.env.TOKEN_KEY);
        const {userId} = decodedData;

        const allApplicationForms = await applicationForm.find({
            issuedBy: userId
        });

        if (allApplicationForms.length > 0) {
            resObj.data = allApplicationForms;
            resObj.message = "Returning all forms issued"
            resObj.statusCode = 200;
            resObj.error = false;

            res.status(resObj.statusCode).json(resObj);
        }
        else {
            resObj.message = "No forms found";
            resObj.error = false;
            resObj.statusCode = 200;

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
module.exports = {
    saveNewForm,
    getAll,
    getAllByStudentId,
    getAllByInstituteBodyId,
}