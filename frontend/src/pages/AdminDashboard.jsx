import { useContext } from "react";

import { useNavigate } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

const AdminDashboard = () => {
  const { user, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold">
        Admin Dashboard
      </h1>

      <p className="mt-4 text-lg">
        Welcome {user?.name}
      </p>

      <button
        onClick={handleLogout}
        className="mt-6 bg-red-500 text-white px-5 py-2 rounded-lg"
      >
        Logout
      </button>
    </div>
  );
};

export default AdminDashboard;