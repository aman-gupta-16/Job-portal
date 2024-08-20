import {
  applyJob,
  getAppliedJobs,
  getApplicants,
  updateStatus,
} from "../controllers/application.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import express from "express";

const router = express.Router();

// Apply for a job

router.get("/apply/:id", isAuthenticated, applyJob);

// Get all applied jobs

router.get("/get", isAuthenticated, getAppliedJobs);

// Get all applicants for a given job

router.get("/:id/applicants", isAuthenticated, getApplicants);

router.post("/status/:id/update", isAuthenticated, updateStatus);

export default router;
