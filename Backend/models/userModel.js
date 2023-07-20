const mongoose = require("mongoose");

mongoose
  .connect("mongodb://0.0.0.0:27017/shopping", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection established");
  });

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A user must have a name"],
  },
  email: {
    type: String,
    // required: [true, "A user must have a email"],
    // unique: true,
    lowercase: true,
    // validate: [validator.isEmail, "Please provide a valid email"],
  },
  number: {
    type: String,
    // required: [true, "A user must have a mobile number"],
    lowercase: true,
    // validate: [validator.isMobilePhone(), "Please provide a valid email"],
  },
  password: {
    type: String,
    required: [true, "A user must have a password"],
  },

  address: {
    type: [String],
  },
  role: {
    type: String,
  },
  cart: {
    type: [Object],
  },

  vendorList: {
    type: [Object],
  },

  orders: {
    type: [Object],
  },
  cancelled: {
    type: [Object],
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
