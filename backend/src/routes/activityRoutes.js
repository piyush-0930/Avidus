import express from "express";

import protect from "../middleware/authMiddleware.js";
import authorizeRoles from "../middleware/roleMiddleware.js";

import { getActivityLogs } from "../controllers/activityController.js";

const router = express.Router();

router.get(
  "/",
  protect,
  authorizeRoles("admin"),
  getActivityLogs
);

export default router;