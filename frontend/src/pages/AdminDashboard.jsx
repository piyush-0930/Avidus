import { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import Sidebar from "../components/Sidebar";

import { AuthContext } from "../context/AuthContext";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();

    navigate("/login");
  };

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-gray-100 min-h-screen p-8">
        <div className="flex justify-end mb-6">
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-5 py-2 rounded-lg"
          >
            Logout
          </button>
        </div>

        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;