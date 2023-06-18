import express from "express";
import { TweetController } from "../../controllers/index.js";

const tweetController = new TweetController();

const router = express.Router();

router.post("/", tweetController.createTweet);
router.get("/:id", tweetController.getTweet);

export default router;