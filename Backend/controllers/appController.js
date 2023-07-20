const { User } = require("../models/userModel");

exports.getData = async (req, res) => {
  const data = await Data.find({});
  res.status(200).send(data);
};
