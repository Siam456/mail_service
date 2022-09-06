require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const app = express();
app.use(express.json({ limit: "4mb" }));
app.use(helmet());
app.use(cors());

app.get("/", (req, res) => {
  res.send("This is main endpoint");
});

const Email = require("../router/emailRouter");

app.use("/api/email", Email);

app.listen(process.env.PORT || 4545, () => {
  console.log("server start successfully");
});
