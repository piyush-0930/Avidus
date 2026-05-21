import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";

import Analytics from "./pages/Analytics";
import Users from "./pages/Users";
import Tasks from "./pages/Tasks";
import ActivityLogs from "./pages/ActivityLogs";

import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin"
        element={
          <AdminRoute>
            <AdminDashboard />
          </AdminRoute>
        }
      >
        <Route
          index
          element={<Analytics />}
        />

        <Route
          path="users"
          element={<Users />}
        />

        <Route
          path="tasks"
          element={<Tasks />}
        />

        <Route
          path="activity"
          element={<ActivityLogs />}
        />
      </Route>
    </Routes>
  );
}

export default App;