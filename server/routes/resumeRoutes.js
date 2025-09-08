import express from "express";
import { getResumes, createResume } from "../controllers/resumeController.js";

const router = express.Router();

router.get("/resumes", getResumes);
router.post("/resumes", createResume);

export default router;
