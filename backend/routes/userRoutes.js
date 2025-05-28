import express from "express";
import { adminOnly, protect } from "../middlewares/authMiddleware.js";
import {
  getUserById,
  getUsers,
} from "../controllers/userController.js";

const router = express.Router();

// user managemnet routes
router.get("/", protect, adminOnly, getUsers); // get all users (admin only)
router.get("/:id", protect, getUserById); // get a specific user

export default router;
