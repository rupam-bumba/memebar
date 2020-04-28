// there should be a | >> module.exports = router; << | in end of this file 

const express = require("express");
const router = express.Router();
// middeleware rought protection 
const chakeAuth =  require("../middleware/chake-auth");


const mainController = require("../controllers/profile/main")
router.get("/" , mainController.get_main); // profile/main rought


const faceController  = require("../controllers/profile/face")
router.get("/face", chakeAuth , faceController.get_face) //profile face rought 

// exporting rought funtion to middleware
module.exports = router;

