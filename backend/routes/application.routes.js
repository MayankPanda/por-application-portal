const router = require("express").Router();

const applicationController = require("../controllers/application.controller");

router.post("/applications/saveNewForm", applicationController.saveNewForm);
router.post("/applications/getAllByInstituteBodyId", applicationController.getAllByInstituteBodyId);

module.exports = router