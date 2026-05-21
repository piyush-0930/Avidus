import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

import API from "../api/axios";

import { AuthContext } from "../context/AuthContext";

import TaskCard from "../components/TaskCard";

const Dashboard = () => {
  const navigate = useNavigate();

  const { user, logout } = useContext(AuthContext);

  const [tasks, setTasks] = useState([]);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const fetchTasks = async () => {
    try {
      setLoading(true);

      const { data } = await API.get("/tasks");

      setTasks(data.tasks);
    } catch (error) {
      toast.error("Failed to fetch tasks");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreateTask = async (e) => {
    e.preventDefault();

    try {
      const { data } = await API.post(
        "/tasks",
        formData
      );

      toast.success(data.message);

      setFormData({
        title: "",
        description: "",
      });

      fetchTasks();
    } catch (error) {
      toast.error(
        error.response?.data?.message
      );
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      const { data } = await API.delete(
        `/tasks/${id}`
      );

      toast.success(data.message);

      fetchTasks();
    } catch (error) {
      toast.error("Delete failed");
    }
  };

  const handleStatusChange = async (
    id,
    status
  ) => {
    try {
      const { data } = await API.put(
        `/tasks/${id}`,
        { status }
      );

      toast.success(data.message);

      fetchTasks();
    } catch (error) {
      toast.error("Update failed");
    }
  };

  const handleLogout = () => {
    logout();

    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">
            Task Dashboard
          </h1>

          <p className="text-gray-600">
            Welcome {user?.name}
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-5 py-2 rounded-lg"
        >
          Logout
        </button>
      </div>

      <div className="max-w-6xl mx-auto p-6">
        <form
          onSubmit={handleCreateTask}
          className="bg-white p-6 rounded-xl shadow-md space-y-4"
        >
          <h2 className="text-2xl font-semibold">
            Create Task
          </h2>

          <input
            type="text"
            name="title"
            placeholder="Task title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
            required
          />

          <textarea
            name="description"
            placeholder="Task description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
            rows="4"
          />

          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-lg"
          >
            Create Task
          </button>
        </form>

        <div className="mt-10">
          <h2 className="text-3xl font-bold mb-6">
            My Tasks
          </h2>

          {loading ? (
            <p>Loading...</p>
          ) : tasks.length === 0 ? (
            <p>No tasks found</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tasks.map((task) => (
                <TaskCard
                  key={task._id}
                  task={task}
                  onDelete={handleDeleteTask}
                  onStatusChange={
                    handleStatusChange
                  }
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;