const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const user = require("./routes/user");

mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGO_URI, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connection successful");
  });

app.use(cors());

app.use(express.json());

app.use("/user", user);

app.listen(process.env.PORT || 8000, () => {
  "Server connected successfully";
});
