import User from "../models/User.js";
import Task from "../models/Task.js";
import logActivity from "../utils/logActivity.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");

    res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    await user.deleteOne();

    await logActivity(
      req.user._id,
      "DELETE_USER",
      `Deleted user: ${user.email}`
    );

    res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateUserStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    user.status = status;

    await user.save();

    await logActivity(
      req.user._id,
      "UPDATE_USER_STATUS",
      `Updated ${user.email} status to ${status}`
    );

    res.status(200).json({
      success: true,
      message: "User status updated",
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find().populate(
      "createdBy",
      "name email role"
    );

    res.status(200).json({
      success: true,
      tasks,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteAnyTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    await task.deleteOne();

    await logActivity(
      req.user._id,
      "ADMIN_DELETE_TASK",
      `Deleted task: ${task.title}`
    );

    res.status(200).json({
      success: true,
      message: "Task deleted by admin",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAnalytics = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();

    const totalTasks = await Task.countDocuments();

    const completedTasks = await Task.countDocuments({
      status: "completed",
    });

    const pendingTasks = await Task.countDocuments({
      status: "pending",
    });

    res.status(200).json({
      success: true,
      analytics: {
        totalUsers,
        totalTasks,
        completedTasks,
        pendingTasks,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};