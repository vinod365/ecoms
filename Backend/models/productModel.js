const mongoose = require("mongoose");
mongoose
  .connect("mongodb://0.0.0.0:27017/shopping", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection established");
  });

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A product must have name"],
  },

  price: {
    type: String,
    required: [true, "A product must have a price"],
  },

  images: {
    type: [String],
    required: [true, "A product must have images in the form of array"],
  },

  isDisabled: {
    type: Boolean,
    default: false,
  },

  heading: {
    type: String,
    required: [true, "A product must have a heading"],
  },
  description: {
    type: String,
    required: [true, "A product must have a description"],
  },
  category: {
    type: String,
    required: [true, "A product must have a category"],
  },
  timeStamp: {
    type: Date,
    default: Date.now(),
  },
  orderQuantity: {
    type: String,
  },
  sellerId: {
    type: String,
  },
  isOutOfStock: {
    type: Boolean,
  },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
