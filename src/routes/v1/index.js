import express from "express";
import tweetRouter from "./tweet-route.js";
import likeRouter from "./like-route.js";
import commentRouter from "./comment-route.js";
import healthRouter from "./health-route.js";
import { AuthController } from "../../controllers/index.js";

const router = express.Router();
const authController = new AuthController();

router.use("/tweets", tweetRouter);
router.use("/likes", likeRouter);
router.use("/comments", commentRouter);
router.use("/health", healthRouter);
router.post("/signup", authController.createUser);
router.post("/login", authController.logIn);

export default router;