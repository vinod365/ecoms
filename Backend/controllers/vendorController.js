const User = require("../models/userModel");

exports.addToVendorList = async (req, res) => {
  console.log("🍿", req.body);
  const user = await User.findOne({ _id: req.body.id });

  if (user == null) {
    res.status(200).send(false);
    return;
  } else {
    const vendorList = user.vendorList;
    console.log("vendorList", vendorList);
    vendorList.push({
      name: req.body.name,
      heading: req.body.heading,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      images: req.body.images,
    });
    await User.updateOne({ _id: req.body.id }, { vendorList });
    res.status(200).send(true);
  }
};

exports.getVendorList = async (req, res) => {
  const user = await User.findOne({ _id: req.query.id });
  res.status(200).send(user?.vendorList);
};
