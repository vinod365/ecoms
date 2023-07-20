const express = require("express");
const appRoutes = require("./routes/appRoutes");
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());
app.use(appRoutes);

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});
