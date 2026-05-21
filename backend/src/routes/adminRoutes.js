import express from "express";

import protect from "../middleware/authMiddleware.js";
import authorizeRoles from "../middleware/roleMiddleware.js";

import {
  deleteAnyTask,
  deleteUser,
  getAllTasks,
  getAllUsers,
  getAnalytics,
  updateUserStatus,
} from "../controllers/adminController.js";

const router = express.Router();

router.use(protect);
router.use(authorizeRoles("admin"));

router.get("/users", getAllUsers);

router.delete("/users/:id", deleteUser);

router.patch("/users/:id/status", updateUserStatus);

router.get("/tasks", getAllTasks);

router.delete("/tasks/:id", deleteAnyTask);

router.get("/analytics", getAnalytics);

export default router;