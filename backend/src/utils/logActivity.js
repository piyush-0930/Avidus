import ActivityLog from "../models/ActivityLog.js";

const logActivity = async (userId, action, details) => {
  try {
    await ActivityLog.create({
      user: userId,
      action,
      details,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default logActivity;