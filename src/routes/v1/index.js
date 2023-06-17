import express from "express";
import tweetsRouter from "./tweet-route.js";

const router = express.Router();

router.use("/tweets", tweetsRouter);

export default router;