// there should be a | module.exports = router; | in end of this file 

const express = require("express");
const router = express.Router();




const mainController = require("../controllers/user/main")
router.get("/", mainController.get_main); // user/main rought


const singupController = require("../controllers/user/singup")
router.post("/singup", singupController.post_singup); // user/singup post


const loginController = require("../controllers/user/login")
router.post("/login", loginController.post_login); // user/login post


// exporting rought funtion to middleware

module.exports = router;
