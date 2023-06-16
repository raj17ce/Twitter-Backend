const express = require("express");
const tweetsRouter = require("./tweet-route");

const router = express.Router();

router.use("/tweets", tweetsRouter);

module.exports = router;