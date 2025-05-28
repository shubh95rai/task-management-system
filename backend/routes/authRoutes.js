import express from "express";
import {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
} from "../controllers/authController.js";
import { protect } from "../middlewares/authMiddleware.js";
import upload from "../middlewares/uploadMiddleware.js";

const router = express.Router();

// auth routes
router.post("/register", registerUser); // register user
router.post("/login", loginUser); // login user
router.get("/profile", protect, getUserProfile); // get user profile
router.put("/profile", protect, updateUserProfile); // update user profile

router.post("/upload-image", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  // const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${
  //   req.file.filename
  // }`;

  const baseUrl =
    process.env.VITE_BASE_URL || `${req.protocol}://${req.get("host")}`;
  const imageUrl = `${baseUrl}/uploads/${req.file.filename}`;

  res.status(200).json({ imageUrl });
});

export default router;
