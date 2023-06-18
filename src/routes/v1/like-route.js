import express from "express";
import { LikeController } from "../../controllers/index.js";

const likeController = new LikeController();

const router = express.Router();

router.post("/toggle", likeController.toggleLike);

export default router;