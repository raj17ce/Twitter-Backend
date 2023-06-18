import express from "express";
import { CommentController } from "../../controllers/index.js";

const router = express.Router();
const commentController = new CommentController();

router.post("/", commentController.createComment);

export default router;