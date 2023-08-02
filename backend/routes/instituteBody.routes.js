const router = require("express").Router();

const instituteBodyController = require("../controllers/instituteBody.controller");

router.post("/instituteBodies/register", instituteBodyController.register);
router.post("/instituteBodies/login", instituteBodyController.login);

module.exports = router;