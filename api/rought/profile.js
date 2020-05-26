// there should be a | >> module.exports = router; << | in end of this file 

const express = require("express");
const router = express.Router();
// middeleware rought protection 
const chakeAuth =  require("../middleware/chake-auth");


const mainController = require("../controllers/profile/main")
router.get("/" , mainController.get_main); // profile/main rought


const faceController  = require("../controllers/profile/face")
router.post("/face", chakeAuth , faceController.post_face) //profile face rought 

const editController  = require("../controllers/profile/edit")
router.put("/edit" , editController.put_edit) //profile face rought 

// exporting rought funtion to middleware
module.exports = router;

