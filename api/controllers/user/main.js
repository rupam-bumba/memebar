
// user gate main 
exports.get_main = (req, res) => {
  // console.log(" | Debug | "+ "/user -- rought ");
  res.status(200).json({
    rought: "rought >>  user >>  main"
  });
};
