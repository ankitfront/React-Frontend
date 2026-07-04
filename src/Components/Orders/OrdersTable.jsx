import React, { useState } from "react";
import orders from "../../data/orders";
import OrderRow from "./OrderRow";

const filters = [
  "All",
  "Delivered",
  "Shipped",
  "Processing",
  "Cancelled",
];

const OrdersTable = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredOrders =
    activeFilter === "All"
      ? orders
      : orders.filter((order) => order.status === activeFilter);

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-[#1E2246]">
            Recent Orders
          </h2>

          <p className="text-gray-500 mt-1">
            Manage and track customer orders
          </p>
        </div>

        <div className="flex gap-3 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-xl transition ${
                activeFilter === filter
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 text-left text-gray-500 text-sm uppercase">
              <th className="py-4 px-6">Order ID</th>
              <th className="py-4 px-6">Customer</th>
              <th className="py-4 px-6">Date</th>
              <th className="py-4 px-6">Total</th>
              <th className="py-4 px-6">Status</th>
              <th className="py-4 px-6">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredOrders.map((order) => (
              <OrderRow
                key={order.id}
                order={order}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersTable;