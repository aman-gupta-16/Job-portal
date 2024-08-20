// Import required modules
import express from "express";
import {
  register,
  login,
  updateUserProfile,
  logout,
} from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { singleUpload } from "../middlewares/multer.js";

const router = express.Router();

// Define a route to retrieve all available books
router.post("/register", singleUpload, register);
router.post("/login", login);
router.post(
  "/profile/update",
  isAuthenticated,
  singleUpload,
  updateUserProfile
);
router.get("/logout", logout);

export default router;
