import React from "react";

const CheckoutItem = ({ item }) => {
  return (
    <div className="flex items-center justify-between py-5 border-b border-gray-100">

      <div className="flex items-center gap-4">

        <div className="relative">

          <div
            className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient}`}
          ></div>

          <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#1E2246] text-white text-xs flex items-center justify-center font-semibold">
            {item.quantity}
          </span>

        </div>

        <div>

          <h3 className="font-bold text-[#1E2246]">
            {item.name}
          </h3>

          <p className="text-sm text-gray-400">
            {item.category}
          </p>

        </div>

      </div>

      <h3 className="font-bold text-[#1E2246] text-lg">
        ₹{(item.price * item.quantity).toLocaleString()}
      </h3>

    </div>
  );
};

export default CheckoutItem;