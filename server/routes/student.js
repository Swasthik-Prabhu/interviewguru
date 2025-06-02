import express from "express";
import { getStudentProfile } from "../controllers/studentController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/profile", protect, getStudentProfile);

export default router;