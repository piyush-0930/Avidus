const TaskCard = ({ task, onDelete, onStatusChange }) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md border">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-xl font-semibold">
            {task.title}
          </h2>

          <p className="text-gray-600 mt-2">
            {task.description}
          </p>
        </div>

        <span
          className={`px-3 py-1 rounded-full text-sm ${
            task.status === "completed"
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {task.status}
        </span>
      </div>

      <div className="flex gap-3 mt-5">
        <button
          onClick={() =>
            onStatusChange(
              task._id,
              task.status === "pending"
                ? "completed"
                : "pending"
            )
          }
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Toggle Status
        </button>

        <button
          onClick={() => onDelete(task._id)}
          className="bg-red-500 text-white px-4 py-2 rounded-lg"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;