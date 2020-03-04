exports.get_main = (req, res) => {
  console.log("/user -- rought ");
  res.status(200).json({
    user: "rought"
  });
};
