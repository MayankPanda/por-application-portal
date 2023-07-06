const loginAuth = require("../controllers/loginController");
const router = require("express").Router();
//const userVerification = require("../middlewares")

signUp = loginAuth.signUp;
login = loginAuth.login;

router.post("/api/signup", signUp);
router.post("/api/login", login);

module.exports = router;