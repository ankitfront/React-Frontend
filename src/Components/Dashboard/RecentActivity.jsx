import React from "react";
import activities from "../../data/activities";
import { Clock3 } from "lucide-react";

const RecentActivity = () => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-[#1E2246]">
          Recent Activity
        </h2>

        <button className="text-indigo-600 text-sm font-semibold hover:underline">
          View All
        </button>
      </div>

      <div className="space-y-5">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-start gap-4"
          >
            <div
              className={`w-3 h-3 rounded-full mt-2 ${activity.color}`}
            ></div>

            <div className="flex-1">
              <p className="font-medium text-gray-800">
                {activity.title}
              </p>

              <div className="flex items-center gap-2 mt-1 text-gray-400 text-sm">
                <Clock3 size={14} />
                <span>{activity.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;