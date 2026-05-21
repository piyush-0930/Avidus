import { useEffect, useState } from "react";

import toast from "react-hot-toast";

import API from "../api/axios";

const Users = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const { data } = await API.get(
        "/admin/users"
      );

      setUsers(data.users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleStatusChange = async (
    id,
    status
  ) => {
    try {
      await API.patch(
        `/admin/users/${id}/status`,
        {
          status:
            status === "active"
              ? "inactive"
              : "active",
        }
      );

      toast.success("Status updated");

      fetchUsers();
    } catch (error) {
      toast.error("Update failed");
    }
  };

  const handleDelete = async (id) => {
    try {
      await API.delete(`/admin/users/${id}`);

      toast.success("User deleted");

      fetchUsers();
    } catch (error) {
      toast.error("Delete failed");
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">
        User Management
      </h1>

      <div className="bg-white rounded-xl shadow-md overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left p-4">
                Name
              </th>

              <th className="text-left p-4">
                Email
              </th>

              <th className="text-left p-4">
                Role
              </th>

              <th className="text-left p-4">
                Status
              </th>

              <th className="text-left p-4">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr
                key={user._id}
                className="border-t"
              >
                <td className="p-4">
                  {user.name}
                </td>

                <td className="p-4">
                  {user.email}
                </td>

                <td className="p-4 capitalize">
                  {user.role}
                </td>

                <td className="p-4 capitalize">
                  {user.status}
                </td>

                <td className="p-4 flex gap-3">
                  <button
                    onClick={() =>
                      handleStatusChange(
                        user._id,
                        user.status
                      )
                    }
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                  >
                    Toggle
                  </button>

                  <button
                    onClick={() =>
                      handleDelete(user._id)
                    }
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;