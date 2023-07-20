const Product = require("../models/productModel");

exports.getInventory = async (req, res) => {
  if (req.query?.find) {
    const data = await Product.findOne({ _id: req.query.find });
    res.status(200).send({
      status: "finded Products",
      data,
    });
    return;
  }

  if (req.query?.cat) {
    const data = await Product.find({ category: req.query.cat });
    res.status(200).send({
      status: "Cat Products",
      data,
    });
    return;
  }
  if (req.query?.best == "true") {
    const data = await Product.find().limit(5).sort({ orderQuantity: -1 });
    res.status(200).send({
      status: "Best Products",
      data,
    });
    return;
  }

  const data = await Product.find({});
  res.status(200).send({
    status: "All Products",
    data,
  });
};

exports.postInventory = async (req, res) => {
  const data = await new Product(req.body).save();
  res.status(200).send(data);
};
