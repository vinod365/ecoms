const User = require("../models/userModel");

exports.getCart = async (req, res) => {
  const data = await User.findOne({ _id: req.query.id });
  console.log("e", data);
  res.status(200).send({
    status: "Cart Products",
    data: data?.cart,
  });
};

exports.updateCart = async (req, res) => {
  console.log("🍿", req.body);
  const user = await User.findOne({ _id: req.body.id });
  console.log("🎵", user);
  const finded = user?.cart?.find((el) => {
    return el.productId == req.body.productId;
  });

  console.log("🔍", finded);
  if (finded != undefined) {
    res.status(200).send(false);
    return;
  } else {
    user.cart.push({
      productId: req.body.productId,
      quantity: req.body.quantity,
    });
    await User.updateOne({ _id: req.body.id }, { cart: user.cart });
    res.status(200).send(true);
  }
};
