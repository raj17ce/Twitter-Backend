import express from "express";
import { HealthController } from "../../controllers/index.js";

const router = express.Router();
const healthController = new HealthController();

router.get("/", healthController.checkHealth);

export default router;