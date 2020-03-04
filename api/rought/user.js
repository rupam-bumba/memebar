const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");



const userController = require("../controllers/user/main")
router.get("/", userController.get_main);


const singupController = require("../controllers/user/singup")
router.post("/singup", singupController.post_singup);


const loginController = require("../controllers/user/login")
router.post("/login", loginController.post_login);



module.exports = router;
