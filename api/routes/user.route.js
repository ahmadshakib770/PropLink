import express from "express";
import {
  getUser,
  getUsers,
  updateUser,
  savePost,
  profilePosts,
  notifyUser
} from "../controllers/user.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/", getUsers);
// router.get("/search/:id", verifyToken, getUser);
router.put("/:id", verifyToken, updateUser);

router.post("/save", verifyToken, savePost);
router.get("/profilePosts", verifyToken, profilePosts);
router.post('/sendEmail', notifyUser)

export default router;
