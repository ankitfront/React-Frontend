import React from "react";

const OrderRow = ({ order }) => {
  const statusStyles = {
    Delivered: "bg-green-100 text-green-600",
    Shipped: "bg-blue-100 text-blue-600",
    Processing: "bg-orange-100 text-orange-600",
    Cancelled: "bg-red-100 text-red-600",
  };

  return (
    <tr className="border-t border-gray-100 hover:bg-gray-50 transition">
      <td className="py-5 px-6">
        <span className="font-semibold text-indigo-600">
          {order.orderId}
        </span>
      </td>

      <td className="py-5 px-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-semibold">
            {order.initials}
          </div>

          <span className="font-semibold text-[#1E2246]">
            {order.customer}
          </span>
        </div>
      </td>

      {/* Date */}
      <td className="py-5 px-6 text-gray-500">
        {order.date}
      </td>

      {/* Total */}
      <td className="py-5 px-6 font-bold text-[#1E2246]">
        {order.total}
      </td>

      {/* Status */}
      <td className="py-5 px-6">
        <span
          className={`px-4 py-1 rounded-full text-sm font-semibold ${
            statusStyles[order.status]
          }`}
        >
          {order.status}
        </span>
      </td>

      {/* Action */}
      <td className="py-5 px-6">
        <button className="bg-indigo-50 hover:bg-indigo-100 text-indigo-600 font-semibold px-5 py-2 rounded-xl transition">
          View Details
        </button>
      </td>
    </tr>
  );
};

export default OrderRow;