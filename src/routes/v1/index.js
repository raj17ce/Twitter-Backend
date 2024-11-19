import express from "express";
import tweetRouter from "./tweet-route.js";
import likeRouter from "./like-route.js";
import commentRouter from "./comment-route.js";
import healthRouter from "./health-route.js";
import userRouter from "./user-route.js";
import authRouter from "./auth-route.js";

const router = express.Router();

router.use("/tweets", tweetRouter);
router.use("/likes", likeRouter);
router.use("/comments", commentRouter);
router.use("/health", healthRouter);
router.use("/users", userRouter);
router.use("/auth", authRouter);

export default router;