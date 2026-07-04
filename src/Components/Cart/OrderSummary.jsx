import React from "react";
import { ShieldCheck, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const OrderSummary = () => {
  const navigate = useNavigate();
  const { items } = useCart();

  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const discount = subtotal * 0.1;
  const tax = (subtotal - discount) * 0.18;
  const total = subtotal - discount + tax;

  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 sticky top-6">

      <h2 className="text-2xl font-bold text-[#1E2246] mb-8">
        Order Summary
      </h2>

      <div className="space-y-5">

        <div className="flex justify-between text-gray-500">
          <span>Subtotal</span>
          <span className="font-semibold text-[#1E2246]">
            ₹{subtotal.toLocaleString()}
          </span>
        </div>

        <div className="flex justify-between text-gray-500">
          <span>Discount (10%)</span>

          <span className="font-semibold text-green-500">
            - ₹{discount.toLocaleString()}
          </span>
        </div>

        <div className="flex justify-between text-gray-500">
          <span>Tax (18% GST)</span>

          <span className="font-semibold text-[#1E2246]">
            ₹{tax.toLocaleString()}
          </span>
        </div>

        <hr className="my-4" />

        <div className="flex justify-between text-3xl font-bold text-[#1E2246]">
          <span>Total</span>

          <span>
            ₹{Math.round(total).toLocaleString()}
          </span>
        </div>

      </div>

      <button
        onClick={() => navigate("/checkout")}
        className="w-full mt-8 bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-2xl flex items-center justify-center gap-3 transition"
      >
        <Check size={22} />

        Proceed to Checkout
      </button>

      <div className="flex items-center justify-center gap-2 text-gray-400 text-sm mt-5">
        <ShieldCheck size={18} />

        Secure checkout · SSL encrypted
      </div>

    </div>
  );
};

export default OrderSummary;