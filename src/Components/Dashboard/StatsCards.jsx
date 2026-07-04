import React from "react";
import stats from "../../data/stats";

const StatsCards = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
            {stats.map((item) => {
                const Icon = item.icon;

                return (
                    <div
                        key={item.id}
                        className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                    >

                        <div className="w-14 h-14 rounded-2xl bg-indigo-100 flex items-center justify-center">
                            <Icon className={`w-7 h-7 ${item.color}`} />
                        </div>

                        <h4 className="text-gray-400 text-sm font-semibold mt-5">
                            {item.title}
                        </h4>

                        <h2 className="text-4xl font-bold text-[#1E2246] mt-2">
                            {item.value}
                        </h2>

                        <p className="text-green-500 text-sm font-semibold mt-2">
                            {item.subtitle}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default StatsCards;