const Product = require("../models/productModel");

exports.getSearchList = async (req, res) => {
  const productList = await Product.find();

  // SearchItemName
  const result = productList.filter((el) => {
    return el.name.includes(req.query.find);
  });

  res.status(200).send(result);
};
