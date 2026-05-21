import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const links = [
    {
      name: "Dashboard",
      path: "/admin",
    },
    {
      name: "Users",
      path: "/admin/users",
    },
    {
      name: "Tasks",
      path: "/admin/tasks",
    },
    {
      name: "Activity Logs",
      path: "/admin/activity",
    },
  ];

  return (
    <div className="w-64 min-h-screen bg-black text-white p-5">
      <h1 className="text-3xl font-bold mb-10">
        Admin Panel
      </h1>

      <div className="space-y-3">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`block px-4 py-3 rounded-lg ${
              location.pathname === link.path
                ? "bg-white text-black"
                : "hover:bg-gray-800"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;