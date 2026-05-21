import { useEffect, useState } from "react";

import toast from "react-hot-toast";

import API from "../api/axios";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const { data } = await API.get(
        "/admin/tasks"
      );

      setTasks(data.tasks);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await API.delete(`/admin/tasks/${id}`);

      toast.success("Task deleted");

      fetchTasks();
    } catch (error) {
      toast.error("Delete failed");
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">
        Task Monitoring
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {tasks.map((task) => (
          <div
            key={task._id}
            className="bg-white p-5 rounded-xl shadow-md"
          >
            <h2 className="text-xl font-bold">
              {task.title}
            </h2>

            <p className="text-gray-600 mt-2">
              {task.description}
            </p>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm">
                By: {task.createdBy?.name}
              </span>

              <span className="capitalize">
                {task.status}
              </span>
            </div>

            <button
              onClick={() =>
                handleDelete(task._id)
              }
              className="mt-5 bg-red-500 text-white px-4 py-2 rounded-lg"
            >
              Delete Task
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;