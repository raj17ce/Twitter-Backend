const express = require("express");
const { TweetController } = require("../../controllers");

const tweetController = new TweetController();

const router = express.Router();

router.post("/", tweetController.createTweet);

module.exports = router;