

// user gate main 
exports.get_main = (req, res) => {
  console.log(" | Debug | " + "/profile -- rought ");
  res.status(200).json({
    rought: "pofile"
  });
};
