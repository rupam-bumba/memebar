
exports.get_main = (req, res) => {
    console.log("/main -- rought ");
    res.status(200).json({
      post: "rought >>  post >>  main"
    });
  };