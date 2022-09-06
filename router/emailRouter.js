const express = require("express");

const router = express.Router();

const { sendEmailController } = require("../controller/emailController");

router.get("/", (req, res) => {
  res.send("this is email endpoint");
});

router.post("/", sendEmailController);

module.exports = router;
