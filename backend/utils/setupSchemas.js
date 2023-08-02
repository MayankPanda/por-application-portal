const instituteBodySchema = require("../models/instituteBody.model");
const applicationFormSchema = require("../models/applicationForm.model");
const studentProfileSchema = require("../models/studentProfile.model");
const applicationResponseSchema = require("../models/applicationResponse.model")

const mongoose = require("../utils/dbConnSetup");

const instituteBody = mongoose.model('instituteBody', instituteBodySchema);
const applicationForm = mongoose.model('applicationForm', applicationFormSchema);
const studentProfile = mongoose.model('studentProfile', studentProfileSchema);
const applicationResponse = mongoose.model('applicationResponse', applicationResponseSchema);

module.exports = {
    instituteBody,
    applicationForm,
    studentProfile,
    applicationResponse,
}