import express from "express";
import { AuthController } from "../../controllers/index.js";

const router = express.Router();
const authController = new AuthController();

router.post("/login", authController.logIn);

export default router;