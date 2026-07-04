import React from "react";
import { Grid2x2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

import CartItem from "./CartItem";
import { useCart } from "../../context/CartContext";

const CartItems = () => {
  const navigate = useNavigate();
  const { items, clearCart } = useCart();

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6">

      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-[#1E2246]">
          Cart Items ({items.length})
        </h2>

        <button
          onClick={clearCart}
          className="bg-gray-100 hover:bg-gray-200 px-5 py-2 rounded-xl font-semibold transition"
        >
          Clear All
        </button>
      </div>

      <div className="grid grid-cols-12 text-gray-400 font-semibold uppercase text-sm border-b border-gray-200 pb-4">

        <div className="col-span-5">
          Product
        </div>

        <div className="col-span-3 text-center">
          Quantity
        </div>

        <div className="col-span-2 text-center">
          Subtotal
        </div>

        <div className="col-span-2 text-center">
          Action
        </div>

      </div>

      {items.length === 0 ? (
        <p className="text-center text-gray-400 py-10">
          Your cart is empty.
        </p>
      ) : (
        items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
          />
        ))
      )}

      <button
        onClick={() => navigate("/products")}
        className="flex items-center gap-2 mt-8 text-indigo-600 font-semibold hover:text-indigo-700 transition"
      >
        <Grid2x2 size={20} />

        Continue Shopping
      </button>
    </div>
  );
};

export default CartItems;