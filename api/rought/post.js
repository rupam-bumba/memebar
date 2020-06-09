// there should be a | >> module.exports = router; << | in end of this file 

const express = require("express");
const router = express.Router();

// middeleware rought protection 
const chakeAuth =  require("../middleware/chake-auth");


const mainController = require("../controllers/post/main")
router.get("/" , mainController.get_main); // profile/main rought

const uploadController = require("../controllers/post/upload")
router.post("/upload", uploadController.post_upload); //profile/uplode rought

const fetchController = require("../controllers/post/fetch")
router.post("/fetch", fetchController.post_fetch); //profile/uplode rought


// exporting rought funtion to middleware
module.exports = router;

