// there should be a | module.exports = router; | in end of this file 

const express = require("express");
const router = express.Router();


const mainController = require("../controllers/more/main")
router.get("/"  , mainController.get_main); // user/main rought



// exporting rought funtion to middleware
module.exports = router;