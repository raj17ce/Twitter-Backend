import express from "express";
import tweetRouter from "./tweet-route.js";
import likeRouter from "./like-route.js";
import commentRouter from "./comment-route.js";

const router = express.Router();

router.use("/tweets", tweetRouter);
router.use("/likes", likeRouter);
router.use("/comments", commentRouter);

export default router;