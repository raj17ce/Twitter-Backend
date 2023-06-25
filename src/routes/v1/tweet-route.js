import express from "express";
import { TweetController } from "../../controllers/index.js";
import { authenticate } from "../../middlewares/index.js";

const tweetController = new TweetController();

const router = express.Router();

router.post("/", authenticate, tweetController.createTweet);
router.get("/:id", tweetController.getTweet);
router.delete("/:id", authenticate, tweetController.deleteTweet);

export default router;