// express
const express = require("express");
const app = express();

// CORS server configuration
var cors = require("cors");
app.use(cors());

//morgan Devolepment
const morgan = require("morgan");
app.use(morgan("dev"));

// Body Parser'
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// dotenv
require("dotenv").config();

// __  __    ____    _   _    _____    ____     ____     _____   ______
// |  \/  |  / __ \  | \ | |  / ____|  / __ \   / __ \   / ____| |  ____|
// | \  / | | |  | | |  \| | | |  __  | |  | | | |  | | | (___   | |__
// | |\/| | | |  | | | . ` | | | |_ | | |  | | | |  | |  \___ \  |  __|
// | |  | | | |__| | | |\  | | |__| | | |__| | | |__| |  ____) | | |____
// |_|  |_|  \____/  |_| \_|  \_____|  \____/   \____/  |_____/  |______|
mongoose = require("mongoose");
mongoose.pluralize(null);
mongoose.connect(
  "mongodb://localhost:27017/memebar",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
  () => {
    console.log("DB connected ...");
  }
);

//  _____     ____    _    _    _____   _    _   _______    _____
// |  __ \   / __ \  | |  | |  / ____| | |  | | |__   __|  / ____|
// | |__) | | |  | | | |  | | | |  __  | |__| |    | |    | (___
// |  _  /  | |  | | | |  | | | | |_ | |  __  |    | |     \___ \
// | | \ \  | |__| | | |__| | | |__| | | |  | |    | |     ____) |
// |_|  \_\  \____/   \____/   \_____| |_|  |_|    |_|    |_____/

//user
app.use("/api/user", require("./api/rought/user"));
//more
app.use("/api/more", require("./api/rought/more"));
//profile
app.use("/api/profile", require("./api/rought/profile"));
//post
app.use("/api/post", require("./api/rought/post"));
//
//
//
//
//
//
//

//  _____    ______               _____   _______     ____    _    _   _____   _        _____
// |  __ \  |  ____|     /\      / ____| |__   __|   |  _ \  | |  | | |_   _| | |      |  __ \
// | |__) | | |__       /  \    | |         | |      | |_) | | |  | |   | |   | |      | |  | |
// |  _  /  |  __|     / /\ \   | |         | |      |  _ <  | |  | |   | |   | |      | |  | |
// | | \ \  | |____   / ____ \  | |____     | |      | |_) | | |__| |  _| |_  | |____  | |__| |
// |_|  \_\ |______| /_/    \_\  \_____|    |_|      |____/   \____/  |_____| |______| |_____/

//path
const path = require("path");

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "build")));

// Serve Public static files
app.use("/public",express.static(path.join(__dirname, "public")));

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});

module.exports = app;
