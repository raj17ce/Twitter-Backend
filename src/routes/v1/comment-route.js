import express from "express";
import { CommentController } from "../../controllers/index.js";
import { authenticate } from "../../middlewares/index.js";

const router = express.Router();
const commentController = new CommentController();

router.post("/", authenticate, commentController.createComment);
router.delete("/:id", authenticate, commentController.deleteComment);

export default router;