const Auth = require('../controllers/AuthController')
SignUp = Auth.Signup
Login = Auth.Login
const userVerification = require("../middlewares/AuthMiddleware").userVerification
const router = require('express').Router()

router.post("/signup", SignUp);
router.post("/login", Login);
router.post("/", userVerification);
module.exports = router;