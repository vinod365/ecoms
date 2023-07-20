const User = require("../models/userModel");

exports.login = async (req, res) => {
  if (req.body.email == undefined) {
  } else {
    const user = await User.findOne({
      email: req.body.email,
    });
    if (user == null) {
      res.status(200).send("Email not found");
      return;
    }
    console.log("login", user.password);
    console.log("login", req.body.password);
    if (user.password == req.body.password) {
      let s = {
        status: true,
        user,
      };
      res.status(200).send(s);
    } else res.status(200).send("Wrong Password");
  }
};

exports.signup = async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });

    if (user != null) {
      res.status(200).send("User already registered");
      return;
    }

    const u = await User(req.body);
    u.save();
    res.status(200).send(true);

    console.log("this", u);
  } catch (err) {
    res.status(200).send(err.message);
    return;
  }
};

exports.getProfile = async (req, res) => {
  console.log(req.query.id);
  const user = await User.findOne({
    _id: req.query.id,
  });
  console.log(user);
  res.status(200).send(user);
};

exports.updateProfile = async (req, res) => {
  const user = await User.updateOne(
    {
      _id: req.query.id,
    },
    req.body
  );

  res.status(200).send(user);
};
