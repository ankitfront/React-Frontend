import React from "react";
import { useNavigate } from "react-router-dom";
import checkoutData from "../../data/checkoutData";
import CheckoutItem from "./CheckoutItem";

const CheckoutSummary = () => {
  const navigate = useNavigate();

  const subtotal = checkoutData.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const discount = subtotal * 0.1;
  const tax = (subtotal - discount) * 0.18;
  const total = subtotal - discount + tax;

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 sticky top-6">

      <h2 className="text-2xl font-bold text-[#1E2246] mb-6">
        Order Summary
      </h2>

      <div className="space-y-1">
        {checkoutData.map((item) => (
          <CheckoutItem
            key={item.id}
            item={item}
          />
        ))}
      </div>

      <div className="mt-6 border-t pt-6 space-y-4">

        <div className="flex justify-between text-gray-500">
          <span>Subtotal</span>
          <span className="font-semibold">
            ₹{subtotal.toLocaleString()}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">
            Discount
          </span>

          <span className="text-green-500 font-semibold">
            - ₹{discount.toLocaleString()}
          </span>
        </div>

        <div className="flex justify-between text-gray-500">
          <span>Tax (18%)</span>

          <span className="font-semibold">
            ₹{tax.toLocaleString()}
          </span>
        </div>

        <hr />

        <div className="flex justify-between items-center">

          <h2 className="text-3xl font-bold text-[#1E2246]">
            Total
          </h2>

          <h2 className="text-3xl font-bold text-[#1E2246]">
            ₹{Math.round(total).toLocaleString()}
          </h2>

        </div>

      </div>


      <button
        onClick={() => alert("Order Placed Successfully!")}
        className="w-full mt-8 bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-2xl font-semibold transition"
      >
        Place Order
      </button>

      <button
        onClick={() => navigate("/cart")}
        className="w-full mt-4 bg-gray-100 hover:bg-gray-200 text-[#1E2246] py-4 rounded-2xl font-semibold transition"
      >
        Back to Cart
      </button>

    </div>
  );
};

export default CheckoutSummary;