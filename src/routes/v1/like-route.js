import express from "express";
import { LikeController } from "../../controllers/index.js";
import { authenticate } from "../../middlewares/index.js";

const likeController = new LikeController();

const router = express.Router();

router.post("/toggle", authenticate, likeController.toggleLike);

export default router;