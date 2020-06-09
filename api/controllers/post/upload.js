const postDB = require("../../models/post");
const path = require("path");
const multer = require("multer");

// Storage Engine
const storage = multer.diskStorage({
  destination: "./././public/post",
  filename: function (req, file, cb) {
    // extract file extrection /jpeg|jpg|png|gif/
    let ext = file.originalname.substring(
      file.originalname.lastIndexOf("."),
      file.originalname.length
    );
    cb(null, Date.now() + "-" + file.fieldname + ext);
  },
});

// Check File Type AND File Filter
function checkFileType(file, cb) {
  console.log("| 15 Debug |");

  const filetypes = /jpeg|jpg|png|gif/; // Allowed ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase()); // Check ext
  const mimetype = filetypes.test(file.mimetype); // Check mime

  console.log("| 21 Debug | extname mimetype " + extname + " " + mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("Error: Images Only!");
  }
}

// Init Upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 10000000000 },
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
}).single("postImageFileName");

//api/post/upload/
exports.post_upload = (req, res) => {
  console.log(
    "| 41 Debug JSON.stringify( req.body) |" + JSON.stringify(req.body)
  );
  console.log("| 41 Debug | "+ req.body.file);

  upload(req, res, (err) => {
    console.log(
      "| 44 Debug JSON.stringify( req.body) |" + JSON.stringify(req.body)
    );
    console.log("|44 Debug | postImageFileName " + req.postImageFileName);
    console.log("|44 Debug | req.file  "+ req.file );


    if (err) {
      console.log("| 45 Debug | Upload  err");
      res.status(200).json({
        msg: err,
      });
    } else {
      if (req.file == undefined) {
        console.log("| 51 Debug |  req.file == undefined ");
        res.status(200).json({
          msg: "Error: No File Selected!",
        });
      } else {
        console.log("| 56 Debug | successfull");

        const post = new postDB({
          _id: mongoose.Types.ObjectId(),
          _user_id: req.body._user_id,
          user_name: req.body.user_name,
          location: req.body.location,
          text: req.body.text,
          link: req.body.link,
          file: req.file.filename,
        });

        post
          .save()
          .then((result) => {
            console.log("| 70 Debug result |" + result);
            res.status(200).json({
              msg: "File Uploaded!",
              file: `${req.file.filename}`,
            });
          })
          .catch((errors) => {
            console.log(" | 77 Debug  errors |" + errors);
            res.status(200).json({
              msg: "File Upload ERROR",
            });
          });
      }
    }
  });
};
