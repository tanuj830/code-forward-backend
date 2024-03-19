const express = require("express");
const router = express.Router();
const UserModel = require("../models/UserSchema");

router.post("/", async (req, res) => {
  const { name, language } = req.body;
  try {
    const User = new UserModel({
      name,
      language,
    });
    await User.save()
      .then((data) => res.status(201).json(data))
      .catch((err) => console.log(err));
  } catch (err) {
    res.status(401).json("Server Error");
  }
});

router.get("/", async (req, res) => {
  try {
    await UserModel.find({})
      .then((data) => res.status(201).json(data))
      .catch((err) => console.log(err));
  } catch (err) {
    res.status(401).json("Server Error");
  }
});

router.put("/submit-code/:id", async (req, res) => {
  try {
    // console.log(req.body);
    await UserModel.updateOne(
      { _id: req.params.id },
      { $addToSet: { userSubmisson: req.body } }
    )
      .then((data) => res.status(201).json("Code Submitted"))
      .catch((err) => console.log(err));
  } catch (err) {
    res.status(401).json("Server Error");
  }
});

module.exports = router;
