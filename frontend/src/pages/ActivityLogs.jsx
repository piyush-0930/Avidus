import { useEffect, useState } from "react";

import API from "../api/axios";

const ActivityLogs = () => {
  const [logs, setLogs] = useState([]);

  const fetchLogs = async () => {
    try {
      const { data } = await API.get(
        "/activity"
      );

      setLogs(data.logs);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">
        Activity Logs
      </h1>

      <div className="bg-white rounded-xl shadow-md overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left p-4">
                User
              </th>

              <th className="text-left p-4">
                Action
              </th>

              <th className="text-left p-4">
                Details
              </th>

              <th className="text-left p-4">
                Time
              </th>
            </tr>
          </thead>

          <tbody>
            {logs.map((log) => (
              <tr
                key={log._id}
                className="border-t"
              >
                <td className="p-4">
                  {log.user?.name}
                </td>

                <td className="p-4">
                  {log.action}
                </td>

                <td className="p-4">
                  {log.details}
                </td>

                <td className="p-4">
                  {new Date(
                    log.createdAt
                  ).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActivityLogs;