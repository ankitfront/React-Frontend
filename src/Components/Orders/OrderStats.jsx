import React from "react";
import orderStats from "../../data/orderStats";

const OrderStats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
      {orderStats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.id}
            className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
          >
          
            <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center">
              <Icon className={`w-7 h-7 ${item.color}`} />
            </div>

            
            <h2 className="text-4xl font-bold text-[#1E2246] mt-5">
              {item.value}
            </h2>

            <p className="text-gray-400 font-semibold mt-2">
              {item.title}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default OrderStats;