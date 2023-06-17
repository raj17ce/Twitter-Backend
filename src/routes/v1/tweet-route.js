import express from "express";
import { TweetController } from "../../controllers/index.js";

const tweetController = new TweetController();

const router = express.Router();

router.post("/", tweetController.createTweet);

export default router;