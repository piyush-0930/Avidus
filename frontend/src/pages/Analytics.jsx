import { useEffect, useState } from "react";

import API from "../api/axios";

const Analytics = () => {
  const [analytics, setAnalytics] = useState(null);

  const fetchAnalytics = async () => {
    try {
      const { data } = await API.get(
        "/admin/analytics"
      );

      setAnalytics(data.analytics);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAnalytics();
  }, []);

  if (!analytics) {
    return <p>Loading...</p>;
  }

  const cards = [
    {
      title: "Total Users",
      value: analytics.totalUsers,
    },
    {
      title: "Total Tasks",
      value: analytics.totalTasks,
    },
    {
      title: "Completed Tasks",
      value: analytics.completedTasks,
    },
    {
      title: "Pending Tasks",
      value: analytics.pendingTasks,
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">
        Analytics
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div
            key={card.title}
            className="bg-white p-6 rounded-xl shadow-md"
          >
            <h2 className="text-lg text-gray-600">
              {card.title}
            </h2>

            <p className="text-4xl font-bold mt-3">
              {card.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Analytics;