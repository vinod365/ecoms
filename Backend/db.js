const mongoose = require("mongoose");

mongoose
  .connect("mongodb://0.0.0.0:27017/shopping", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection established");
  });

const productSchema = {
  name: String,
  price: String,
  images: [String],
  orders: String,
  isDisabled: Boolean,
  heading: String,
  description: String,
};

const userSchema = {
  name: String,
  price: String,
  images: [String],
  orders: String,
  isDisabled: Boolean,
  heading: String,
  description: String,
};

exports.Product = mongoose.model("product", productSchema);

const data = await new Product({
  name: "S23",
  price: "799",
  images: [
    "https://img.global.news.samsung.com/in/wp-content/uploads/2023/03/S23-Ultra_ISOCELL-HP2_main1.jpg",
    "https://img.global.news.samsung.com/in/wp-content/uploads/2023/03/S23-Ultra_ISOCELL-HP2_main1.jpg",
    "https://img.global.news.samsung.com/in/wp-content/uploads/2023/03/S23-Ultra_ISOCELL-HP2_main1.jpg",
    "https://img.global.news.samsung.com/in/wp-content/uploads/2023/03/S23-Ultra_ISOCELL-HP2_main1.jpg",
  ],
  isDisabled: false,
  heading: "Galaxy S23 Ultra",
  description:
    "More light for your night - Get ready for a Gallery full of epic night shots everyone will want. Nightography's enhanced AI keeps details clear, so low light photos and videos will be bright and colorful from dusk to dawn and back again.",
  category: "smartphone",

  orderQuantity: "0",
}).save();

res.status(200).send(data);
